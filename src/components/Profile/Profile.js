import React, { Component } from 'react'
import callApi from '../../utils/apiCaller';
import { uploadImage } from '../../utils/upload'
import './style.css'
import { actUpdateMeRequset, actChangePasswordMeRequset } from '../../redux/actions/auth';
import { connect } from 'react-redux'
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';
import { toast } from 'react-toastify';
import Moment from 'react-moment';
import { startLoading, doneLoading } from '../../utils/loading'
import { formatNumber } from '../../config/TYPE'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

toast.configure()

let token;
const override = css`
    display: block;
    margin: 0 auto;
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
`;
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      address: '',
      avatar: null,
      loading: false,
      img: null,
      oldPassword: '',
      password: '',
      rePassword: '',
      historyBooking: []
    }
  }


  async componentDidMount() {
    token = localStorage.getItem('_auth');
    const res = await callApi('users/me', 'GET', null, token);
    const res2 = await callApi('users/me/historyBooking', 'GET', null, token);
    this.setState({
      name: res.data.results[0].name,
      email: res.data.results[0].email,
      phone: res.data.results[0].phone,
      address: res.data.results[0].address,
      avatar: res.data.results[0].avatar,
      historyBooking: res2.data.results
    })
  }

  handleChangeImage = (event) => {
    if (event.target.files[0]) {
      const img = event.target.files[0];
      this.setState(() => ({ img }));
    }
    const output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmitChangePassword = (event) => {
    event.preventDefault();
    const { password, oldPassword, rePassword } = this.state;
    if (password.length < 6 || password.length > 32) {
      return toast.error('M???t kh???u ph???i c?? 6-32 k?? t???');
    }
    if (password !== rePassword) {
      toast.error('M???t kh???u kh??ng h???p l???');
      return
    }
    const data = {
      oldPassword,
      newPassword: password
    }
    startLoading();
    this.props.change_pw_me(data, token);
    doneLoading();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, address, phone } = this.state;
    let { img, avatar } = this.state;
    this.setState({
      loading: true
    })
    //upload image to firebase
    if (img !== null && img !== avatar) {
      avatar = await uploadImage(img);
    }
    const newAvatar = (avatar === '') ? null : avatar
    const newAddress = (address === '') ? null : address
    const newPhone = (phone === '') ? null : phone
    const newName = (name === '') ? null : name

    //edit
    const editUser = {
      name: newName,
      address: newAddress,
      avatar: newAvatar,
      phone: newPhone,
    }
    await this.props.update_me(editUser, token);
    this.setState({
      loading: false,
    })
  }
   cancelOrder = (id) =>{
    MySwal.fire({
      title: 'B???n c?? ch???c ch???n?',
      text: "B???n mu???n hu??? ????n h??ng!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '?????ng ??',
      cancelButtonText: 'Hu???'
    }).then(async (result) => {
      if (result.value) {
        const res = await callApi(`users/order/${id}/cancel`, 'PUT', null, token);
      if(res && res.status === 200) {
        const res2 = await callApi('users/me/historyBooking', 'GET', null, token);
        this.setState({
          historyBooking: res2.data.results
        })
        Swal.fire(
          'Hu??? th??nh c??ng!',
          '????n ?????t h??ng c???a b???n ???? b??? h???y.',
          'success'
        )
      }
      }
    })
  }

  showOrder(status){
    if (status === 'Unconfirm') { 
      return (<div className="col-md-3"><label className="fix-status" style={{background: '#ff9800'}} >Ch??a x??c nh???n</label></div>)
    
    }
    if (status === 'Confirm') {
      return (
        <div className="col-md-3"><label className="fix-status" style={{background: '#337ab7'}} >X??c nh???n</label></div>
      )
     
    }
    if (status === 'Shipping') {
      return (
   <div className="col-md-3"><label className="fix-status" style={{background: '#634a41'}} >Ship</label></div>
      )
      
    }
    if (status === 'Complete') {
      return (
        <div className="col-md-3"><label className="fix-status" style={{background: '#5cb85c'}} >Ho??n th??nh</label></div>
      )
     
    }
    if (status === 'Canceled') {
      return (
        <div className="col-md-3"><label className="fix-status" style={{background: '#d9534f'}} >Hu???</label></div>
      )
     
    }
  }

  render() {
    const { name, email, phone, address, avatar, loading, oldPassword, password, rePassword, historyBooking } = this.state;
    return (
      <div className="container emp-profile">
        <div className='sweet-loading'>
          <ClipLoader
            css={override}
            sizeUnit={"px"}
            size={30}
            color={'#796aeebd'}
            loading={loading}
          />
        </div>
        <form method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="fix-img-div profile-img">
                <img id="output" className="fix-img" src={avatar || 'https://i.ibb.co/NCdx7FF/avatar-Default.png'} alt="not found" />
              </div>
              <span className="btn btn-default btn-file" style={{ color: '#212529' }}>
                Upload File <input onChange={this.handleChangeImage} type="file" />
              </span>
            </div>
            <div className="col-md-8">
              <div className="profile-head">  
                <p className="proile-rating"></p>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Th??ng tin t??i kho???n</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Thay ?????i m???t kh???u</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="history-tab" data-toggle="tab" href="#history" role="tab" aria-controls="history" aria-selected="false">L???ch s??? ?????t h??ng</a>
                  </li>
                </ul>
              </div>

              <div className="tab-content profile-tab" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <form onSubmit={(event) => this.handleSubmit(event)} >
                    <div className="row mt-1">
                      <div className="col-md-6">
                        <label>H??? T??n</label>
                      </div>
                      <div className="col-md-6">
                        <input name="name" onChange={this.handleChange} value={name} className="form-control form-control-sm" type="text" />
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-md-6">
                        <label>Email</label>
                      </div>
                      <div className="col-md-6">
                        <input disabled value={email} className="form-control form-control-sm" type="text" />
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-md-6">
                        <label>?????a ch???</label>
                      </div>
                      <div className="col-md-6">
                        <input onChange={this.handleChange} name="address" value={address} className="form-control form-control-sm" type="text" />
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-md-6">
                        <label>S??? ??i???n tho???i</label>
                      </div>
                      <div className="col-md-6">
                        <input onChange={this.handleChange} name="phone" value={phone} className="form-control form-control-sm" type="text" />
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-6">
                      </div>
                      <div className="col-md-3">
                        <button style={{ backgroundColor: '#0b0bed8c', border: '#0b0bed8c' }} type="submit" className="btn btn-primary">C???p Nh???t</button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <form onSubmit={(event) => this.handleSubmitChangePassword(event)} >
                    <div className="row mb-1">
                      <div className="col-md-3">
                        <label>M???t kh???u hi???n t???i</label>
                      </div>
                      <div className="col-md-9">
                        <input type="password" name="oldPassword" value={oldPassword} onChange={this.handleChange} className="form-control form-control-sm" />
                      </div>
                    </div>
                    <div className="row mb-1">
                      <div className="col-md-3">
                        <label>M???t kh???u m???i</label>
                      </div>
                      <div className="col-md-9">
                        <input type="password" name="password" value={password} onChange={this.handleChange} className="form-control form-control-sm" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <label>X??c nh???n m???t kh???u</label>
                      </div>
                      <div className="col-md-9">
                        <input type="password" name="rePassword" value={rePassword} onChange={this.handleChange} className="form-control form-control-sm" />
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-3">
                      </div>
                      <div className="col-md-3">
                        <button style={{ backgroundColor: '#0b0bed8c', border: '#0b0bed8c' }} type="submit" className="btn btn-primary">C???p Nh???t</button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="tab-pane fade" id="history" aria-labelledby="history-tab">
                  <div className="row">
                    <div className="col-md-1"><b>M?? ?????t h??ng</b></div>
                    <div className="col-md-3"><b>Ng??y ?????t h??ng</b></div>
                    <div className="col-md-3"><b>Tr???ng Th??i</b></div>
                    <div className="col-md-3"><b>T???ng ti???n</b></div>
                    <div className="col-md-2"><b>Action</b></div>
                  </div>
                  {
                    historyBooking && historyBooking.length ? historyBooking.map((item, index) => {
                      return (
                        <div key={index} className="row">
                          <div className="col-md-1">  <Link to="/orders/history/item">#{item.id}</Link></div>
                          <div className="col-md-3">
                          <Moment format="YYYY-MM-DD">
                            {item.createdAt}
                          </Moment></div>
                          { item.status === 'Canceled' }
                          {this.showOrder(item.status)}                        
                          <div className="col-md-3">{formatNumber.format(item.totalAmount)}</div>
                          <div className="col-md-2"><Link to="#" onClick={(id)=>this.cancelOrder(item.id)} style={{ backgroundColor: '#ffff', border: '#ffff' }}><i className="fa fa-window-close" style={{color: 'red', fontSize: 15}}></i></Link></div>
                        </div>
                      )
                    }) : null                   
                  }
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    update_me: (data, token) => {
      dispatch(actUpdateMeRequset(data, token))
    },
    change_pw_me: (data, token) => {
      dispatch(actChangePasswordMeRequset(data, token))
    }
  }
}

export default connect(null, mapDispatchToProps)(Profile)
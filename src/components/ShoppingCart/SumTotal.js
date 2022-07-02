import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatNumber } from '../../config/TYPE'
import { Redirect } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

class SumTotal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectYourOrder: false,
      redirectYourLogin: false
    }
  }


  checkAuthenticate = () => {
    const { user, sumTotal } = this.props;
    if (!sumTotal.length) {
      return toast.error('Vui lòng mua hàng trước khi thanh toán');
    }
    if (user) {
      this.setState({
        redirectYourOrder: true
      })
    } else {
      toast.error('Vui lòng đăng nhập trước khi thanh toán');
      this.setState({
        redirectYourLogin: true
      })
    }
  }

  render() {
    const { redirectYourOrder, redirectYourLogin } = this.state;
    const { sumTotal } = this.props;
    let amount = 0;
    let shippingTotal = 2;
    if (sumTotal.length > 0) {
      amount = sumTotal.reduce((sum, item) => {
        return sum += item.quantity * item.price
      }, 0)
    }
    if (redirectYourOrder) {
      return <Redirect to="/checkout"></Redirect>
    }
    if (redirectYourLogin) {
      return <Redirect to="/login-register"></Redirect>
    }
    return (
      <div>
        <div className="cart-page-total">
          <h2>Giỏ hàng</h2>
          <ul>
            <li>Tổng Giỏ Hàng <span>{amount ? formatNumber.format(amount) : 0}</span></li>
            <li>Tiền Ship <span>{formatNumber.format(amount ? shippingTotal : 0)}</span></li>
            <li style={{ color: 'red' }}>Tổng <span>{amount ? formatNumber.format(amount + shippingTotal) : 0}</span></li>
          </ul>
          <button onClick={() => this.checkAuthenticate()} className="fix-text-checkout">Đặt Hàng Ngay</button>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    sumTotal: state.cart,
    user: state.auth
  }
}
export default connect(mapStateToProps, null)(SumTotal)

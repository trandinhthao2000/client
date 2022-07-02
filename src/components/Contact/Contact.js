import React, { Component } from "react";
import callApi from "../../utils/apiCaller";
import { toast } from "react-toastify";
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  }
  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, subject, message } = this.state;
    const newSubject = subject ? subject : null;
    const newMessage = message ? message : null;
    if (!name || !email) {
      return toast.error("Error! name and email is required");
    }
    const newContact = {
      name,
      email,
      subject: newSubject,
      message: newMessage,
    };
    const res = await callApi("contacts", "POST", newContact, null);
    if (res && res.status === 200) {
      toast.success("Gửi liên hệ thành công");
      this.setState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };
  render() {
    const { name, email, subject, message } = this.state;
    return (
      <div className="contact-main-page mb-30 mb-md-30 mb-sm-30 mb-xs-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 offset-lg-1 col-md-12 order-1 order-lg-2">
              <div>
                <ul>
                  <li>
                    <h3 className="contact-page-title">
                      Địa chỉ của chúng tôi
                    </h3>
                    <p>
                      <label classNam="text-contact">
                         Khóm 10, Phường 1, TP.Bạc Liêu, Bạc Liêu
                      </label>
                    </p>
                  </li>
                  <li>
                    <h3 className="contact-page-title">Email của chúng tôi</h3>
                    <p>
                      <label>trandinhthao2000@gmail.com</label>
                    </p>
                  </li>
                  <li>
                    <h3 className="contact-page-title">Điện thoại</h3>
                    <p>
                      <label>1999 1999</label>
                    </p>
                  </li>
                  <li>
                    <h3 className="contact-page-title">Thời gian làm việc</h3>
                    <p>
                      <label>*Mở cửa - Thứ Hai - Chủ Nhật. 09:30-21:30</label>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 order-2 order-lg-1">
              <div className="contact-form-content pt-sm-55 pt-xs-55">
                <h3 className="contact-page-title">
                  Liên hệ với chúng tôi
                </h3>
                <div className="contact-form">
                  <form onSubmit={(event) => this.handleSubmit(event)}>
                    <div className="form-group">
                      <label>
                        Tên của bạn <span className="required">*</span>
                      </label>
                      <input
                        onChange={this.handleChange}
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Tên của bạn"
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        Email của bạn <span className="required">*</span>
                      </label>
                      <input
                        onChange={this.handleChange}
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email của bạn"
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        Vấn đề của bạn <span className="required">*</span>
                      </label>
                      <input
                        onChange={this.handleChange}
                        type="text"
                        name="subject"
                        value={subject}
                        placeholder="Vấn đề của bạn"
                      />
                    </div>
                    <div className="form-group mb-30">
                    <label>
                        Nội dung <span className="required">*</span>
                      </label>
                      <textarea
                        onChange={this.handleChange}
                        name="message"
                        value={message}
                        placeholder="Nội dung"
                      />
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        value="submit"
                        className="li-btn-3"
                        name="submit"
                      >
                        Gửi cho chúng tôi
                      </button>
                    </div>
                  </form>
                </div>
                <p className="form-messege" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

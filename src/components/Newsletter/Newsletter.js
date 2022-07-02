import React from "react";
import "./Newsletter.css";
const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="newsletter_content">
              <div className="section_title">
                <h1>Đăng ký &amp; Theo dõi</h1>
              </div>
              <div className="newsletter_text">
                <p>
                  Theo dõi chúng tôi để nhận được những thông tin và ưu đãi mới
                  nhất!.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-6 nl_col">
            <div className="newsletter_form_container d-flex align-items-center justify-content-end">
              <form action="#" className="newsletter_form" id="newsletter_form">
                <div className="d-flex flex-row align-items-start justify-content-between">
                  <input
                    type="email"
                    className="newsletter_input"
                    placeholder="Email của bạn..."
                    required="required"
                  />
                  <button className="button newsletter_button">
                    <span>Đăng Ký</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

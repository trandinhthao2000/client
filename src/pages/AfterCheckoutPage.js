import React, { Component } from "react";

export default class AfterCheckoutPage extends Component {
  render() {
    return (
      <div className="error404-area pt-30 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="error-wrapper text-center ptb-50 pt-xs-20">
                <div>
                  <img
                    src="https://i.ibb.co/pvDhxPj/checked-ok-yes-icon-1320196391133448530.png"
                    alt="checked"
                    height="70px"
                  />
                  <h1>Cám ơn bạn.</h1>
                </div>
                <div>
                  <h1>Đơn hàng của bạn đã được đặt thành công.</h1>
                </div>
                <div>
                  <p>
                    <i>
                      Thông tin chi tiết về đơn đặt hàng của bạn đã được gửi đến
                      email. Vui lòng kiểm tra email của bạn để kiểm tra trạng
                      thái của nó.
                    </i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

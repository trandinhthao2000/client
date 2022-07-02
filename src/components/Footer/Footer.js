// import React from "react";

// import { FaHome, FaRegEnvelope, FaPhone } from "react-icons/fa";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faTwitter,
//   faYoutube,
//   faGithub,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";

// const Footer = () => {
//   return (
//     <div
//       className="page-footer font-small mdb-color lighten-3 pt-4 footer"
//       id="footer"
//     >
//       <div className="container text-center text-md-left">
//         <div className="row">
//           <div className="col-md-4 col-lg-4 mr-auto my-md-4 my-0 mt-4 mb-1">
//             <h5 className="font-weight-bold mb-4">CONTENT</h5>
//             <p>
//               Đây là trang thương mại điện tử chuyên cung cấp các mặt hàng chính
//               hãng và cao cấp.
//             </p>
//           </div>

//           <hr className="clearfix w-100 d-md-none"></hr>
//           <div className="col-md-4 col-lg-5 mx-12 my-md-4 my-0 mt-4 mb-1">
//             <h5 className="font-weight-bold mb-4">ADDRESS</h5>

//             <ul className="list-unstyled">
//               <li>
//                 <p>
//                   <FaHome /> Quận 9, Việt Nam
//                 </p>
//               </li>
//               <li>
//                 <p>
//                   <FaRegEnvelope /> trandinhthao2000@gmail.com
//                 </p>
//               </li>
//               <li>
//                 <p>
//                   <FaPhone /> 0837 153 472
//                 </p>
//               </li>
//             </ul>
//           </div>

//           <hr className="clearfix w-100 d-md-none"></hr>
//           <div className="col-md-4 col-lg-3 text-center mx-12 my-4">
//             <h5 className="font-weight-bold mb-4">FOLLOW ME</h5>
//             <div className="row">
//               <div className="col">
//                 <a
//                   href="https://www.facebook.com/profile.php?id=100058422053540"
//                   type="button"
//                   className="btn-floating"
//                 >
//                   <FontAwesomeIcon icon={faFacebook} />
//                 </a>
//               </div>

//               <div className="col">
//                 <a href="#" type="button" className="btn-floating">
//                   <FontAwesomeIcon icon={faTwitter} />
//                 </a>
//               </div>

//               <div className="col">
//                 <a href="#" type="button" className="btn-floating">
//                   <FontAwesomeIcon icon={faYoutube} />
//                 </a>
//               </div>
//               <div className="col">
//                 <a href="#" type="button" className="btn-floating">
//                   <FontAwesomeIcon icon={faInstagram} />
//                 </a>
//               </div>

//               <div className="col">
//                 <a
//                   href="https://github.com/trandinhthao2000"
//                   type="button"
//                   className="btn-floating"
//                 >
//                   <FontAwesomeIcon icon={faGithub} />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="footer-copyright text-center py-3">
//         {/* <a href="https://www.facebook.com/profile.php?id=100058422053540">
//           Trần Đình Thảo
//         </a> */}

//         <span className="ten1" >
//           Trần Đình Thảo
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Footer;
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-area">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-3 col-12">
            <div className="footer-logo mb-3">
              {/* <p><a href="https://bobui.vn/"><img class="logo-f" src="https://bobui.vn/assets/img/logo/bbsg_w.png" alt="logo"></a></p> */}
              <div className="footer-copyright text-center py-3">
                <span className="ten1"> Trần Đình Thảo </span>
              </div>
              <div className="footer-social-icon">
                <ul>
                  <li>
                    <a
                      target="_blank"
                      className="facebook"
                      href="https://www.facebook.com/profile.php?id=100058422053540 "
                    >
                      <i className="fa fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" className="instagram" href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      className="github"
                      href="https://github.com/trandinhthao2000"
                    >
                      <i class="fa fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" className="twitter" href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" className="instagram" href="#">
                      <i className="fa fa-envelope"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      className="instagram"
                      href="tel://0976070696"
                    >
                      <i className="fa fa-phone-square"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-12">
            <div className="footer-menu mb-3">
              <h4>HỖ TRỢ KHÁCH HÀNG</h4>
              <p>
                <a href="">Chính sách thanh toán</a>
              </p>
              <p>
                <a href="">Chính sách đổi trả</a>
              </p>
              <p>
                <a href="">Chính sách vận chuyển</a>
              </p>
              <p>
                <a href="">Hướng dẫn mua hàng</a>
              </p>
              <p>
                <a href="">Chính sách bảo mật</a>
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-12">
            <div className="footer-menu mb-3">
              <h4>LIÊN KẾT</h4>
              <p>
                <a href="#" target="_blank">
                  Mới - Sự Kiện
                </a>
              </p>
              <p>
                <a href="#">Hỗ trợ kỹ thuật</a>
              </p>
              <p>
                <a href="#">Điều khoản sử dụng</a>
              </p>
              <p>
                <a href="#">Liên hệ</a>
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-12">
            <div className="footer-menu mb-3">
              <h4>THƯƠNG MẠI ĐIỆN TỬ</h4>
              <p>
                Địa chỉ: <span>Khóm 10, Phường 1, TP.Bạc Liêu, Bạc Liêu</span>
              </p>
              <p>Người đại diện: Trần Đình Thảo</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

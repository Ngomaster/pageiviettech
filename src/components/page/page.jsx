import Slideshow from "../Slide/slideshow";
import "./page.css";

Page.propTypes = {};

function Page() {
  return (
    <div>
      <div id="fixNav" className="flex justify-between">
        <button>
          <img
            id="img-i"
            className="ml-20"
            src="https://iviettech.vn/wp-content/themes/rd-viettech/assets/images/logo-iviettech.png"
            alt=""
          />
        </button>
        <ul id="nav-head" className="ml-20 flex ">
          <li>
            <a href="">CÁC KHÓA HỌC</a>
          </li>
          <li>
            <a href="">GIỚI THIỆU</a>
          </li>
          <li>
            <a href="">LỊCH KHAI GIẢNG</a>
          </li>
          <li>
            <a href="">TRANG VÀNG HV</a>
          </li>
          <li>
            <a href="">VIỆC LÀM</a>
          </li>
          <li>
            <a href="">BLOG</a>
          </li>
        </ul>
        <div className="flex">
          <i className="fa-solid fa-magnifying-glass"></i>
          <button id="btn-head" className="rounded-2xl text-white">
            ĐĂNG KÝ HỌC
          </button>
        </div>
      </div>
      <div className="mt-10">
        <Slideshow />
      </div>
      <div>
        <div>
          <img
            id="img-logo"
            src="https://iviettech.vn/wp-content/themes/rd-viettech/assets/images/highlights/logo-2.png"
            alt=""
          />
        </div>
        <h1 className="text-center text-2xl text-red-600 font-black mt-1">
          <button> CÁC KHÓA HỌC</button>
        </h1>
        <ul id="nav-items" className="flex justify-center">
          <li className="nav-item">
            <a href="">KHÓA HỌC LẬP TRÌNH</a>
          </li>
          <li className="nav-item">
            <a href="">KHÓA HỌC THIẾT KẾ</a>
          </li>
          <li className="nav-item">
            <a href="">KHÓA HỌC CHUYÊN SÂU</a>
          </li>
          <li className="nav-item">
            <a href="">KHÓA HỌC KHÁC</a>
          </li>
        </ul>
        <div className="cart flex justify-around mt-3">
          <div className="cart-item">
            <img
              src="https://iviettech.vn/wp-content/uploads/2017/05/FE-logo-1.jpg"
              alt=""
            />
            <div className="cart-text">
              <h2>Lập trình Frond end-New</h2>
              <p>Thời gian: 5 tháng</p>
              <p>Suất học: Tối 3-5-7</p>
            </div>
          </div>
          <div className="cart-item">
            <img
              src="https://iviettech.vn/wp-content/uploads/2013/12/ST-logo-1-286x300.jpg"
              alt=""
            />
            <div className="cart-text">
              <h2>Lập trình Frond end-New</h2>
              <p>Thời gian: 5 tháng</p>
              <p>Suất học: Tối 3-5-7</p>
            </div>
          </div>
          <div className="cart-item">
            <img
              src="https://iviettech.vn/wp-content/uploads/2023/01/Logo-Khoa-hoc-lap-trinh-Python.png"
              alt=""
            />
            <div className="cart-text">
              <h2>Lập trình Frond end-New</h2>
              <p>Thời gian: 5 tháng</p>
              <p>Suất học: Tối 3-5-7</p>
            </div>
          </div>
          <div className="cart-item">
            <img
              src="https://iviettech.vn/wp-content/uploads/2013/12/PR-logo-286x300.jpg"
              alt=""
            />
            <div className="cart-text">
              <h2>Lập trình Frond end-New</h2>
              <p>Thời gian: 5 tháng</p>
              <p>Suất học: Tối 3-5-7</p>
            </div>
          </div>
        </div>
        <div className="container-news">
          <div className="bg-red-600">
            <div>
              <img
                id="img-logo"
                src="https://iviettech.vn/wp-content/themes/rd-viettech/assets/images/highlights/logo-2.png"
                alt=""
              />
              <h1 className="text-center text-2xl text-zinc-100 font-black mt-1">
                Tin tức mới
              </h1>
            </div>
            <div className="container-fluid">
              <div className="center">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <img
                      className="w-50 shadow mb-3 bg-white rounded"
                      src="https://iviettech.vn/wp-content/uploads/2023/03/ivt-bday-ngang.png"
                      alt=""
                    />
                    <h2 className="text-zinc-100">
                      MỪNG SINH NHẬT THÁNG 3 - IVIETTECH GIẢM GIÁ HỌC PHÍ THẢ GA
                    </h2>
                    <p className="text-zinc-100">
                      Mừng sinh nhật năm thứ 9, trung tâm iViettech sẽ giảm trực
                      tiếp % học phí trọn gói và tặng quà (mũ bảo hiểm hoặc áo
                      iViettech) cho các bạn…
                    </p>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="flex">
                      <div>
                        <img
                          className="w-40 h-20 mr-2.5 shadow mb-3 bg-white rounded"
                          src="https://iviettech.vn/wp-content/uploads/2023/02/IMG_4104-300x213.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <p className="text-zinc-100">
                          LỘC LÁ ĐẦU THÁNG HAI - AI SẼ LÀ NGƯỜI MAY MẮN NHẤT?
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div>
                        <img
                          className="w-40 h-20 mr-2.5 shadow mb-3 bg-white rounded"
                          src="https://iviettech.vn/wp-content/uploads/2023/02/1-300x300.png"
                          alt=""
                        />
                      </div>
                      <div>
                        <p className="text-zinc-100">
                          GIẢM 10% HỌC PHÍ TRỌN GÓI TOÀN BỘ KHÓA HỌC - ƯU ĐÃI CÓ
                          HẠN
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div>
                        <img
                          className="w-40 h-20 mr-2.5 shadow mb-3 bg-white rounded"
                          src="https://iviettech.vn/wp-content/uploads/2023/01/2-min-2048x1391.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <p className="text-zinc-100">
                          Rinh lộc đầu năm tại iViettech
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div>
                        <img
                          className="w-40 h-20 mr-2.5 shadow mb-3 bg-white rounded"
                          src="https://iviettech.vn/wp-content/uploads/2023/01/cover-Locxuan-iVT-300x111.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <p className="text-zinc-100">
                          LỘC XUÂN - KHUÂN SỚM 2023 - GIẢM NGAY 10% HỌC PHÍ
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center text-white">
                <a href=""> Xem thêm</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid mt-5">
          <div className="mb-1">
            <h1 className="text-center text-2xl text-red-600 font-black mt-1">
              LỊCH KHAI GIẢNG
            </h1>
          </div>
          <nav>
            <ul id="nav-items" className="flex justify-center">
              <li className="nav-item">
                <a href="">KHÓA HỌC LẬP TRÌNH</a>
              </li>
              <li className="nav-item">
                <a href="">KHÓA HỌC THIẾT KẾ</a>
              </li>
              <li className="nav-item">
                <a href="">KHÓA HỌC CHUYÊN SÂU</a>
              </li>
              <li className="nav-item">
                <a href="">KHÓA HỌC KHÁC</a>
              </li>
            </ul>
          </nav>
          <div className="row">
            <div className="d-flex flex-column mb-3">
              <div id="carts">
                <div id="cart-item1">
                  <div>
                    <p>KHAI GIẢNG</p>
                    <p>13-03-2023</p>
                  </div>
                  <div>
                    <p>LỊCH HỌC</p>
                    <p>TỐI 2-4-6</p>
                  </div>
                </div>
                <div id="cart-item2">
                  <img
                    className="mr-4"
                    src="https://iviettech.vn/wp-content/uploads/2013/12/PR-logo.jpg"
                    alt=""
                  />
                  <p>Lập trình cơ bản</p>
                </div>
                <div className="Btn-items">
                  <button id="btn-item" className="rounded-2xl text-white">
                    ĐĂNG KÝ HỌC
                  </button>
                </div>
              </div>
              <div id="carts">
                <div id="cart-item1" className="d-flex bg-red-600">
                  <div>
                    <p>KHAI GIẢNG</p>
                    <p>13-03-2023</p>
                  </div>
                  <div>
                    <p>LỊCH HỌC</p>
                    <p>TỐI 2-4-6</p>
                  </div>
                </div>
                <div id="cart-item2" className="d-flex">
                  <img
                    className="mr-4"
                    src="https://iviettech.vn/wp-content/uploads/2017/05/FE-logo-1.jpg"
                    alt=""
                  />
                  <p>Lập trình cơ bản</p>
                </div>
                <div className="Btn-items">
                  <button id="btn-item" className="rounded-2xl text-white">
                    ĐĂNG KÝ HỌC
                  </button>
                </div>
              </div>
              <div id="carts">
                <div id="cart-item1" className="d-flex bg-red-600">
                  <div>
                    <p>KHAI GIẢNG</p>
                    <p>13-03-2023</p>
                  </div>
                  <div>
                    <p>LỊCH HỌC</p>
                    <p>TỐI 2-4-6</p>
                  </div>
                </div>
                <div id="cart-item2" className="d-flex">
                  <img
                    className="mr-4"
                    src="https://iviettech.vn/wp-content/uploads/2013/12/ST-logo-1.jpg"
                    alt=""
                  />
                  <p>Lập trình cơ bản</p>
                </div>
                <div className="Btn-items">
                  <button id="btn-item" className="rounded-2xl text-white">
                    ĐĂNG KÝ HỌC
                  </button>
                </div>
              </div>
              <div id="carts">
                <div id="cart-item1" className="d-flex bg-red-600">
                  <div>
                    <p>KHAI GIẢNG</p>
                    <p>13-03-2023</p>
                  </div>
                  <div>
                    <p>LỊCH HỌC</p>
                    <p>TỐI 2-4-6</p>
                  </div>
                </div>
                <div id="cart-item2" className="d-flex">
                  <img
                    className="mr-4"
                    src="https://iviettech.vn/wp-content/uploads/2023/01/Logo-Khoa-hoc-lap-trinh-Python.png"
                    alt=""
                  />
                  <p>Lập trình cơ bản</p>
                </div>
                <div className="Btn-items">
                  <button id="btn-item" className="rounded-2xl text-white">
                    ĐĂNG KÝ HỌC
                  </button>
                </div>
              </div>
              <div id="carts">
                <div id="cart-item1" className="d-flex bg-red-600">
                  <div>
                    <p>KHAI GIẢNG</p>
                    <p>13-03-2023</p>
                  </div>
                  <div>
                    <p>LỊCH HỌC</p>
                    <p>TỐI 2-4-6</p>
                  </div>
                </div>
                <div id="cart-item2" className="d-flex">
                  <img
                    className="mr-4"
                    src="https://iviettech.vn/wp-content/uploads/2013/12/JV-logo-1.jpg"
                    alt=""
                  />
                  <p>Lập trình cơ bản</p>
                </div>
                <div className="Btn-items">
                  <button id="btn-item" className="rounded-2xl text-white">
                    ĐĂNG KÝ HỌC
                  </button>
                </div>
              </div>
              <div id="carts">
                <div id="cart-item1" className="d-flex bg-red-600">
                  <div>
                    <p>KHAI GIẢNG</p>
                    <p>13-03-2023</p>
                  </div>
                  <div>
                    <p>LỊCH HỌC</p>
                    <p>TỐI 2-4-6</p>
                  </div>
                </div>
                <div id="cart-item2" className="d-flex">
                  <img
                    className="mr-4"
                    src="https://iviettech.vn/wp-content/uploads/2013/12/PHP-logo-1.jpg"
                    alt=""
                  />
                  <p>Lập trình cơ bản</p>
                </div>
                <div className="Btn-items">
                  <button id="btn-item" className="rounded-2xl text-white">
                    ĐĂNG KÝ HỌC
                  </button>
                </div>
              </div>
              <div id="carts">
                <div id="cart-item1" className="d-flex bg-red-600">
                  <div>
                    <p>KHAI GIẢNG</p>
                    <p>13-03-2023</p>
                  </div>
                  <div>
                    <p>LỊCH HỌC</p>
                    <p>TỐI 2-4-6</p>
                  </div>
                </div>
                <div id="cart-item2" className="d-flex">
                  <img
                    className="mr-4"
                    src="https://iviettech.vn/wp-content/uploads/2021/12/NJ-logo.jpg"
                    alt=""
                  />
                  <p>Lập trình cơ bản</p>
                </div>
                <div className="Btn-items">
                  <button id="btn-item" className="rounded-2xl text-white">
                    ĐĂNG KÝ HỌC
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sbottom">
        <div className="bottom">
          <div className="title">
            <h3>Đối tác tuyển dụng</h3>
          </div>
          <div>
            <ul className="d-flex icon">
              <li>
                <img
                  src="https://iviettech.vn/wp-content/themes/rd-viettech/assets/images/partners/iviettech-partner-8.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://iviettech.vn/wp-content/themes/rd-viettech/assets/images/partners/iviettech-partner-1.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://iviettech.vn/wp-content/themes/rd-viettech/assets/images/partners/iviettech-partner-2.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://iviettech.vn/wp-content/themes/rd-viettech/assets/images/partners/iviettech-partner-3.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://iviettech.vn/wp-content/themes/rd-viettech/assets/images/partners/iviettech-partner-4.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://iviettech.vn/wp-content/themes/rd-viettech/assets/images/partners/iviettech-partner-5.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://iviettech.vn/wp-content/themes/rd-viettech/assets/images/partners/iviettech-partner-6.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://iviettech.vn/wp-content/themes/rd-viettech/assets/images/partners/iviettech-partner-7.png"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <div className="contact">
          <div>
            <img
              src="https://iviettech.vn/wp-content/themes/rd-viettech/assets/images/logo-w.png"
              alt=""
            />
            <div className="social">
              <h4>Kết nối với chúng tôi:</h4>
              <ul className="d-flex">
                <li>
                  <i class="fa-brands fa-square-facebook"></i>
                </li>
                <li>
                  <i class="fa-brands fa-youtube"></i>
                </li>
              </ul>
            </div>
            <div className="content">
              <p>Bản quyền thuộc về iViettech © 2022</p>
            </div>
          </div>

          <div>
            <ul>
              <li>
                <span>
                  <i class="fa-solid fa-earth-americas"></i>
                </span>
                92 Quang Trung, P. Thạch Thang, Q. Hải Châu, TP. Đà Nẵng
              </li>
              <li>
                <span>
                  <i class="fa-solid fa-phone"></i>
                </span>
                02363 888 279
              </li>
              <li>
                <span>
                  <i class="fa-solid fa-envelope"></i>
                </span>
                contact@iviettech.vn
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

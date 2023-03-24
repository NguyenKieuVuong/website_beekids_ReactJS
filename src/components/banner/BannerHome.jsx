import React from "react";

const BannerHome = () => {
  return (
    <section id="block-bannertop" className="-bg-img-6">
      <div className="container -wide">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="content-block wow fadeInDown" data-wow-delay="0.5s">
              <h2 className="title-main">
                Nền tảng{" "}
                <span>
                  kết nối học tập
                  <br />
                  và phát triển tư duy
                </span>{" "}
                cho Trẻ từ 4 - 10
              </h2>
              <div className="content-2">
                <p className="txt-sumary">
                  Đến với <b>BEEKIDS</b>, trẻ phát triển nhiều kỹ năng cần thiết
                  cho bản thân
                </p>
                <div className="block-skill_banner wow fadeInDown">
                  <div className="skill_banner-item">
                    <div className="block-main">
                      <div className="block-row icon">
                        <img src="/images/ico-skill-1.png" />
                      </div>
                      <div className="block-row title">Quan sát</div>
                    </div>
                  </div>
                  <div className="skill_banner-item">
                    <div className="block-main">
                      <div className="block-row icon">
                        <img src="/images/ico-skill-2.png" />
                      </div>
                      <div className="block-row title">Ghi nhớ</div>
                    </div>
                  </div>
                  <div className="skill_banner-item">
                    <div className="block-main">
                      <div className="block-row icon">
                        <img src="/images/ico-skill-3.png" />
                      </div>
                      <div className="block-row title">Suy luận</div>
                    </div>
                  </div>
                  <div className="skill_banner-item">
                    <div className="block-main">
                      <div className="block-row icon">
                        <img src="/images/ico-skill-4.png" />
                      </div>
                      <div className="block-row title">Biện luận</div>
                    </div>
                  </div>
                  <div className="skill_banner-item">
                    <div className="block-main">
                      <div className="block-row icon">
                        <img src="/images/ico-skill-5.png" />
                      </div>
                      <div className="block-row title">Logic</div>
                    </div>
                  </div>
                  <div className="skill_banner-item">
                    <div className="block-main">
                      <div className="block-row icon">
                        <img src="/images/ico-skill-6.png" />
                      </div>
                      <div className="block-row title">Số học</div>
                    </div>
                  </div>
                </div>
                <div className="button-list">
                  <div className="logos-inline mb-3">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.dragold.bkids"
                      target="_blank"
                      className="logo-image "
                    >
                      <img
                        className=""
                        alt="android"
                        src="/images/store-android.png"
                      />
                    </a>
                    <a
                      href="https://apps.apple.com/vn/app/bkids/id1534126323"
                      target="_blank"
                      className="logo-image "
                    >
                      <img
                        className=""
                        alt="apple"
                        src="/images/store-apple.png"
                      />
                    </a>
                    <a
                      href="https://bkids.edu.vn/"
                      target="_blank"
                      className="logo-image "
                    >
                      <img
                        className=""
                        alt="Website"
                        src="/images/app-website.png"
                      />
                    </a>

                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#modalVideo"
                      data-modal="modalYoutube"
                      data-video="https://www.youtube.com/embed/Cw111KXOny4"
                      className="btn btn-video"
                    >
                      <img src="/images/icon-video.png" />
                      Xem video Beekids
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerHome;

function CourseFavorite() {
  return (
    <section id="course-favorite">
      <div className="container -wide">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1">
            <div className="block-title text-center">
              <div className="title-header text-uppercase">Khóa học</div>
              <h4 className="title-title">
                CÁC KHÓA HỌC HÀNG ĐẦU DÀNH CHO TRẺ
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div id="slide-course" className="">
        <div className="image">
          <img src="/assets/images/course-1.png" />
        </div>
        <div className="image">
          <img src="/assets/images/course-2.png" />
        </div>
        <div className="image">
          <img src="/assets/images/course-3.png" />
        </div>
        <div className="image">
          <img src="/assets/images/course-4.png" />
        </div>
      </div>
      <div className="text-center mt-5 wow fadeInDown">
        <button type="button" className="btn btn-bigsize btn-beekids">
          Khám phá ngay
        </button>
      </div>
    </section>
  );
}

export default CourseFavorite;

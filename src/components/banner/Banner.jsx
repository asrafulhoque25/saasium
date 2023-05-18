import bannerImg from '../../assets/images/banner.png'
import rightArrow from "../../assets/images/arrow-right.svg";
const Banner = () => {
  return (
      <div className="banner">
          <div className="container">
              <div className="banner-wrapper">
                  <div className="row align-items-center">
                      <div className="col-xl-6">
                          <div className="banner-left pb-5 pb-xl-0">
                              <p className="text-clr-secondary fs-18 fw-medium">Boost Your Business</p>
                              <h1 className="fs-60 fw-bold mb-3">The simple way organize your SaaS</h1>
                              <p className="fs-6 text-clr-dark3 mb-5">Add your companies value proposition here. Answer: Why should they care? What differentiates you from the.</p>
                              <div className="inputwrapper position-relative">
                                  <input type="email" className="form-control" placeholder="Your work email..." />
                                  <div className="nav-btn input-btn d-inline-block">
                                      <a href="#" className="signup-btn bg-clr-primary d-flex align-items-center text-decoration-none fs-14 fw-bold text-white">
                                          Get Started
                                          <img src={rightArrow} alt="" />
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-6">
                          <div className="banner-img ">
                              <img src={bannerImg} className="img-fluid" alt="" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Banner
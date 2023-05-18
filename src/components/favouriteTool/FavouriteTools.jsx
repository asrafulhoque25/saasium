
import toolImg1 from '../../assets/images/tool1.svg'
import toolImg2 from '../../assets/images/tool2.svg'
import toolImg3 from '../../assets/images/tool3.svg'
import toolImg4 from '../../assets/images/tool4.svg'
import toolImg5 from '../../assets/images/tool5.svg'
import './FavouriteTool.scss'
import Slider from "react-slick";
import CommonHeader from '../CommonHeader/CommonHeader'
const FavouriteTools = () => {
        const settings2 = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 3,
            autoplay: false,
            autoplaySpeed: 4000,

            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 3,
                    },
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
            ],
        };
  return (
      <div className="favouriteTool section-padding" style={{ background: "linear-gradient(180deg, rgba(233, 228, 255, 0.79) 16.47%, rgba(242, 251, 255, 0) 100%)" }}>
          <div className="container">
              <div className="favouriteToolWrapper mb-5">
                  <CommonHeader
                      title=" 50+ of your favorite tools"
                      pra='Conveniently mesh cooperative services via magnetic outsourcing. Dynamically grow <br className="d-none d-xl-inline" /> value whereas accurate e-commerce parallel quality vectors.'
                      textClr="#0E1552"
                  />
              </div>
              <div className="toolSlider">
                  <Slider {...settings2}>
                      <a href="#" className="tool-slider-item text-center radius-16 bg-white text-decoration-none">
                          <img src={toolImg1} className="img-fluid pt-lg-4 pt-4 pb-lg-5 pb-4 mx-auto" alt="" />
                          <div className="img-border"></div>
                          <p className="fs-5 fw-medium text-clr-dark1 my-3">Zapier</p>
                      </a>
                      <a href="#" className="tool-slider-item text-center radius-16 bg-white text-decoration-none">
                          <img src={toolImg2} className="img-fluid pt-lg-4 pt-4 pb-lg-5 pb-4 mx-auto" alt="" />
                          <div className="img-border"></div>
                          <p className="fs-5 fw-medium text-clr-dark1 my-3">Twitter</p>
                      </a>
                      <a href="#" className="tool-slider-item text-center radius-16 bg-white text-decoration-none">
                          <img src={toolImg3} className="img-fluid pt-lg-4 pt-4 pb-lg-5 pb-4 mx-auto" alt="" />
                          <div className="img-border"></div>
                          <p className="fs-5 fw-medium text-clr-dark1 my-3">Facebook</p>
                      </a>
                      <a href="#" className="tool-slider-item text-center radius-16 bg-white text-decoration-none">
                          <img src={toolImg4} className="img-fluid pt-lg-4 pt-4 pb-lg-5 pb-4 mx-auto" alt="" />
                          <div className="img-border"></div>
                          <p className="fs-5 fw-medium text-clr-dark1 my-3">Webflow</p>
                      </a>
                      <a href="#" className="tool-slider-item text-center radius-16 bg-white text-decoration-none">
                          <img src={toolImg5} className="img-fluid pt-lg-4 pt-4 pb-lg-5 pb-4 mx-auto" alt="" />
                          <div className="img-border"></div>
                          <p className="fs-5 fw-medium text-clr-dark1 my-3">Shopify</p>
                      </a>
                      <a href="#" className="tool-slider-item text-center radius-16 bg-white text-decoration-none">
                          <img src={toolImg1} className="img-fluid pt-lg-4 pt-4 pb-lg-5 pb-4 mx-auto" alt="" />
                          <div className="img-border"></div>
                          <p className="fs-5 fw-medium text-clr-dark1 my-3">Zapier</p>
                      </a>
                      <a href="#" className="tool-slider-item text-center radius-16 bg-white text-decoration-none">
                          <img src={toolImg2} className="img-fluid pt-lg-4 pt-4 pb-lg-5 pb-4 mx-auto" alt="" />
                          <div className="img-border"></div>
                          <p className="fs-5 fw-medium text-clr-dark1 my-3">Twitter</p>
                      </a>
                      <a href="#" className="tool-slider-item text-center radius-16 bg-white text-decoration-none">
                          <img src={toolImg3} className="img-fluid pt-lg-4 pt-4 pb-lg-5 pb-4 mx-auto" alt="" />
                          <div className="img-border"></div>
                          <p className="fs-5 fw-medium text-clr-dark1 my-3">Facebook</p>
                      </a>
                  </Slider>
              </div>
          </div>
      </div>
  );
}

export default FavouriteTools
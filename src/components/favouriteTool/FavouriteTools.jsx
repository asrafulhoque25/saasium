
import toolImg1 from '../../assets/images/tool1.svg'
import toolImg2 from '../../assets/images/tool2.svg'
import toolImg3 from '../../assets/images/tool3.svg'
import toolImg4 from '../../assets/images/tool4.svg'
import toolImg5 from '../../assets/images/tool5.svg'
import './FavouriteTool.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const FavouriteTools = () => {
        const settings2 = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 3,
            autoplay: false,
            autoplaySpeed: 4000,
        };
  return (
      <div className="favouriteTool section-padding" style={{ background: "linear-gradient(180deg, rgba(233, 228, 255, 0.79) 16.47%, rgba(242, 251, 255, 0) 100%)" }}>
          <div className="container">
              <div className="favouriteToolWrapper">
                  <div className="text-center">
                      <h1 className="fs-44 fw-bold text-clr-secondary"> 50+ of your favorite tools</h1>
                      <p className="fs-6 text-clr-dark3 ff-poppins">
                          Conveniently mesh cooperative services via magnetic outsourcing. Dynamically grow <br className="d-none d-xl-inline" /> value whereas accurate e-commerce parallel quality
                          vectors.
                      </p>
                  </div>
              </div>
              <div className="toolSlider">
                  <Slider {...settings2}>
                      <div className="tool-slider-item text-center radius-16 bg-white">
                          <img src={toolImg1} className="img-fluid pt-4 pb-5 mx-auto" alt="" />
                          <div className="img-border"></div>
                          <p className="fs-5 fw-medium text-clr-dark1 my-3">Zapier</p>
                      </div>
                      <div className="tool-slider-item text-center radius-16 bg-white">
                          <img src={toolImg2} className="img-fluid pt-4 pb-5 mx-auto" alt="" />
                          <div className="img-border"></div>
                          <p className="fs-5 fw-medium text-clr-dark1 my-3">Twitter</p>
                      </div>
                      <div className="tool-slider-item text-center radius-16 bg-white">
                          <img src={toolImg3} className="img-fluid pt-4 pb-5 mx-auto" alt="" />
                          <div className="img-border"></div>
                          <p className="fs-5 fw-medium text-clr-dark1 my-3">Facebook</p>
                      </div>
                      <div className="tool-slider-item text-center radius-16 bg-white">
                          <img src={toolImg4} className="img-fluid pt-4 pb-5 mx-auto" alt="" />
                          <div className="img-border"></div>
                          <p className="fs-5 fw-medium text-clr-dark1 my-3">Webflow</p>
                      </div>
                      <div className="tool-slider-item text-center radius-16 bg-white">
                          <img src={toolImg5} className="img-fluid pt-4 pb-5 mx-auto" alt="" />
                          <div className="img-border"></div>
                          <p className="fs-5 fw-medium text-clr-dark1 my-3">Shopify</p>
                      </div>
                      <div className="tool-slider-item text-center radius-16 bg-white">
                          <img src={toolImg1} className="img-fluid pt-4 pb-5 mx-auto" alt="" />
                          <div className="img-border"></div>
                          <p className="fs-5 fw-medium text-clr-dark1 my-3">Zapier</p>
                      </div>
                      <div className="tool-slider-item text-center radius-16 bg-white">
                          <img src={toolImg2} className="img-fluid pt-4 pb-5 mx-auto" alt="" />
                          <div className="img-border"></div>
                          <p className="fs-5 fw-medium text-clr-dark1 my-3">Twitter</p>
                      </div>
                      <div className="tool-slider-item text-center radius-16 bg-white">
                          <img src={toolImg3} className="img-fluid pt-4 pb-5 mx-auto" alt="" />
                          <div className="img-border"></div>
                          <p className="fs-5 fw-medium text-clr-dark1 my-3">Facebook</p>
                      </div>
                  </Slider>
              </div>
          </div>
      </div>
  );
}

export default FavouriteTools
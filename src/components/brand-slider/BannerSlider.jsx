
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import brand1 from '../../assets/images/banner-slider1.svg'
import brand2 from '../../assets/images/banner-slider2.svg'
import brand3 from '../../assets/images/banner-slider3.svg'
import brand4 from '../../assets/images/banner-slider4.svg'
import brand5 from '../../assets/images/banner-slider5.svg'
import brand6 from '../../assets/images/banner-slider7.svg'
import './BrandSlider.scss'
const BannerSlider = () => {

      const settings = {
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
                      slidesToShow: 3,
                      slidesToScroll: 2,
                  },
              },
              {
                  breakpoint: 800,
                  settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                  },
              },
              {
                  breakpoint: 550,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                  },
              },
          ],
      };

  return (
      <div className="customer-brand">
          <div className="container">
              <p className=" text-clr-secondary fs-4 fw-medium text-center">
                  Start bragging about how many <span className="text-clr-primary"> customers you have.</span>{" "}
              </p>
                  <div className="banner-slider-item pb-5">
                      <div>
                          <Slider {...settings}>
                              <div>
                                  <div className="band-image">
                                      <img src={brand1} className="img-fluid" alt="" />
                                  </div>
                              </div>
                              <div>
                                  <div className="band-image">
                                      <img src={brand2} className="img-fluid" alt="" />
                                  </div>
                              </div>
                              <div>
                                  <div className="band-image">
                                      <img src={brand3} className="img-fluid" alt="" />
                                  </div>
                              </div>
                              <div>
                                  <div className="band-image">
                                      <img src={brand4} className="img-fluid" alt="" />
                                  </div>
                              </div>
                              <div>
                                  <div className="band-image">
                                      <img src={brand5} className="img-fluid" alt="" />
                                  </div>
                              </div>
                              <div>
                                  <div className="band-image">
                                      <img src={brand6} className="img-fluid" alt="" />
                                  </div>
                              </div>
                              <div>
                                  <div className="band-image">
                                      <img src={brand2} className="img-fluid" alt="" />
                                  </div>
                              </div>
                              <div>
                                  <div className="band-image">
                                      <img src={brand3} className="img-fluid" alt="" />
                                  </div>
                              </div>
                              <div>
                                  <div className="band-image">
                                      <img src={brand4} className="img-fluid" alt="" />
                                  </div>
                              </div>
                          </Slider>
                      </div>
                  </div>
          </div>
      </div>
      
  );
}
 
export default BannerSlider 
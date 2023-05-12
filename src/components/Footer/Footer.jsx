import { Link } from 'react-router-dom';
import FooterLogo from '../../assets/images/FooterLogo.svg';
import rightArrow from "../../assets/images/arrow-right.svg";
import call from '../../assets/images/call-calling.svg';
import location from '../../assets/images/location-tick.svg';
import sms from '../../assets/images/sms-search.svg';
import facebook from '../../assets/images/facebook.svg';
import twitter from '../../assets/images/twitter.svg';
import pinterest from '../../assets/images/pinterest.svg';
import instagram from '../../assets/images/instagram.svg';


const Footer = () => {

  const footerMenuContent = [
      {
          logo: FooterLogo,
          menuList: [
              {
                  icon: call,
                  menuName: "+88 012 698 / +88 458 9651",
                  path: "/career",
                  menuListColor: "text-white",
              },
              {
                  icon: sms,
                  menuName: "example@gmail.com",
                  path: "/stocklist",
                  menuListColor: "text-white",
              },
              {
                  icon: location,
                  menuName: "4140 Parker Rd. Allentown, NeRw Mexico 31134",
                  path: "/contact",
                  menuListColor: "text-white",
              },
          ],
      },

      {
          menuTitle: "Navigation",
          menuList: [
              {
                  menuName: "Blog",
                  path: "/blog",
              },
              {
                  menuName: "About Amazon",
                  path: "/aboutamazon",
              },
              {
                  menuName: "Investor Relations",
                  path: "/investorrelations",
              },
              {
                  menuName: "Privacy Policy",
                  path: "/privacypolicy",
              },
          ],
      },

      {
          menuTitle: "Resources",
          menuList: [
              {
                  menuName: "Make Money with Us",
                  path: "/makemoney",
              },
              {
                  menuName: "Become an Affiliate",
                  path: "/affiliate",
              },
              {
                  menuName: "Advertise Your Products",
                  path: "/advertiseproducts",
              },
              {
                  menuName: "Shipping Rates & Policies",
                  path: "/shippingpolicies",
              },
              {
                  menuName: "Returns & Replacements",
                  path: "/returnsreplacements",
              },
          ],
      },
  ];

  return (
      <footer className="bg-clr-dark1">
          <div className="container">
              <div className="row section-padding ">
                  {footerMenuContent?.map((footerMenu, index) => {
                      return (
                          <div className="col-xl-3 col-md-4 col-6" key={index}>
                              <Link to="/" className="d-block ">
                                  {footerMenu?.logo && <img src={footerMenu?.logo} alt="logo" />}
                              </Link>
                              <div className="footer-widget-menu">
                                  <h4 className="widget-title footer-title fw-black text-white mb-5">{footerMenu.menuTitle}</h4>
                                  <ul className="list-unstyled mb-0 pt-2">
                                      {footerMenu.menuList.map((menu, index) => {
                                          return (
                                              <li className="mb-3 w-100" key={index}>
                                                  <div className="d-flex align-items-center gap-2">
                                                      <img src={menu.icon} className="img-fluid" alt="" />
                                                      <Link
                                                          to={menu.path}
                                                          className={`fs-16 ff-poppins text-decoration-none fw-medium ${menu?.menuListColor ? menu?.menuListColor : "text-clr-gray"}`}
                                                          key={index}
                                                      >
                                                          {menu.menuName}
                                                      </Link>
                                                  </div>
                                              </li>
                                          );
                                      })}
                                  </ul>
                              </div>
                          </div>
                      );
                  })}
                  <div className="col-md-3">
                      <div className="footer-right">
                          <h4 className="footer-title mb-5"> Newsletter </h4>
                          <p className="fs-6 fw-medium text-white">Newsletter Join over 1M people getting our emails</p>

                          <div className="form-group">
                              <input type="email" className="form-control" placeholder="Email address" />
                              <div className="nav-btn input-btn mt-3">
                                  <a href="#" className="signup-btn bg-clr-primary d-flex gap-2 align-items-center justify-content-center text-decoration-none fs-14 fw-bold text-white">
                                      Get Started
                                      <img src={rightArrow} alt="" />
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="border-top py-4 d-flex align-items-center justify-content-between">
                  <div className="reserved-pra ">
                      <p className="fs-6 text-clr-dark5">© 2023 . All Rights Reserved</p>
                  </div>
                  <div className="footer-social">
                      <ul className="d-flex align-items-center justify-content-center gap-3">
                          <li>
                              <a href="#" className="footer-social-link d-flex align-items-center justify-content-center ">
                                  <img src={facebook} className="img-fluid" alt="" />
                              </a>
                          </li>
                          <li>
                              <a href="#" className="footer-social-link d-flex align-items-center justify-content-center ">
                                  <img src={twitter} className="img-fluid" alt="" />
                              </a>
                          </li>
                          <li>
                              <a href="#" className="footer-social-link d-flex align-items-center justify-content-center ">
                                  <img src={pinterest} className="img-fluid" alt="" />
                              </a>
                          </li>
                          <li>
                              <a href="#" className="footer-social-link d-flex align-items-center justify-content-center ">
                                  <img src={instagram} className="img-fluid" alt="" />
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </footer>
  );
};

export default Footer;
import Slider from "react-slick";
import { testimonial } from "../../data";
import CommonHeader from "../CommonHeader/CommonHeader";
import "./Testimonial.scss";

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 4000,
        margin: 10,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="testimonial section-padding" style={{ background: "linear-gradient(180deg, #ECE8FF 0%, #F2FBFF 100%)" }}>
            <div className="container">
                <CommonHeader
                    title="Testimonial"
                    pra='Conveniently mesh cooperative services via magnetic outsourcing. Dynamically grow <br className="d-none d-xl-inline" /> value whereas accurate e-commerc.'
                />

                <div className="testimonial-slider">
                    <Slider {...settings}>
                        {testimonial.map((data, index) => {
                            return (
                                <div className="testimonial-item d-flex flex-column justify-content-between radius-16" key={index}>
                                    <div className="quote">
                                        <img src={data.quote} className="img-fluid" alt="" />
                                    </div>
                                    <div className="testimonial-content mb-5">
                                        <div className="rating d-flex align-items-center gap-2 mb-4">
                                            <p className="mb-0 pt-1">4.3</p>
                                            <ul className="list-unstyled d-flex align-items-center gap-2 mb-0">
                                                <li>
                                                    <img src={data.starFull} className="img-fluid" alt="" />
                                                </li>
                                                <li>
                                                    <img src={data.starFull} className="img-fluid" alt="" />
                                                </li>
                                                <li>
                                                    <img src={data.starFull} className="img-fluid" alt="" />
                                                </li>
                                                <li>
                                                    <img src={data.starFull} className="img-fluid" alt="" />
                                                </li>
                                                <li>
                                                    <img src={data.starlight} className="img-fluid" alt="" />
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="fs-6 fw-normal text-clr-dark4 font-italic">{data.testimonialPra}</p>
                                    </div>
                                    <div className="reviewer-info d-flex align-items-center gap-3">
                                        <img src = {data.reviewer} className="img-fluid" alt="" />
                                        <div>
                                            <h4 className="fs-18 fw-medium pb-1 text-clr-dark1 mb-0">{data.reviewerName}</h4>
                                            <p className="fs-13 fw-normal text-clr-dark1 mb-0">{data.reviewerDesignation}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;

import blockarrow from "../../assets/images/black-arrow-right.svg";
import { workprocess } from "../../data";
import CommonHeader from "../CommonHeader/CommonHeader";
import "./WorkProcess.scss";

const WorkProcess = () => {
    return (
        <div className="workProcess section-padding" style={{ background: "#5A3BEE" }}>
            <div className="container">
                <CommonHeader
                    title="Our work process!"
                    pra='Conveniently mesh cooperative services via magnetic outsourcing. Dynamically grow <br class="d-none d-xl-inline" /> value whereas accurate e-commerce parallel quality vectors.'
                    textClr="text-white"
                />
                <div className="row">
                    {workprocess.map((data, datakey) => {
                        return (
                            <div className="process-wrapper col-sm-6 col-md-4 col-lg-3" key={datakey}>
                                <div className="process-item text-center">
                                    <div className="process-icon d-flex align-items-center justify-content-center bg-white rounded-pill">
                                        <img src={data.img} className="img-fluid" alt="" />
                                    </div>
                                    <div className="title">
                                        <h3 className="fs-4 fw-bold text-white">{data.title}</h3>
                                        <p className="fs-14 ff-poppins text-white mb-0">{data.pra}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <a href="#" className="signup-btn get-started bg-white d-flex align-items-center text-decoration-none fs-6 fw-medium text-clr-secondary">
                        Get Started
                        <img src={blockarrow} className="img-fluid ps-2" alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default WorkProcess;

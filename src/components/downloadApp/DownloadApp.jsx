
import appImg from '../../assets/images/app.svg'
import app1 from '../../assets/images/badge1.svg'
import app2 from "../../assets/images/badge2.svg";

const DownloadApp = () => {
  return (
      <div className="downloadApp section-padding">
          <div className="container">
              <div className="row align-items-center ">
                  <div className="col-md-6">
                      <div className="app-img mb-4 mb-md-0">
                          <img src={appImg} className="img-fluid" alt="" />
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="app-content text-md-start text-center">
                          <h1 className="fs-40 fw-semi-bold text-clr-secondary">
                              Download our app, <br className="d-flex d-xl-inline" /> and get started
                          </h1>
                          <p className="text-clr-dark3 fs-6 ff-poppins">
                              New features. New appearance. No risk and credit <br className="d-flex d-xl-inline" /> card required.
                          </p>
                          <div className="d-flex align-items-center justify-content-md-start justify-content-center gap-2 ">
                              <img src={app1} className="img-fluid" alt="" />
                              <img src={app2} className="img-fluid" alt="" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default DownloadApp
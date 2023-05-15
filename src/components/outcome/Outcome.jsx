
import OutcomeData from "./OutcomeData";
const Outcome = () => {
  return (
      <div className="outcome section-padding" style={{"background": 'linear-gradient(180deg, #ECE8FF 0%, #F2FBFF 100%)'}}>
          <div className="container">
              <div className="outcomeWrapper">
                  <h1 className="fs-44 fw-bold text-center text-clr-secondary">{OutcomeData?.sectionTitle} </h1>
                          <div className="row mt-5 pt-3">
                  {OutcomeData?.data?.map((info, index) => {
                      return (
                          <div className="col-xl-4" key={index}>
                              <div className="outcome-bg ">
                                  <div className="outcomeItem text-center px-5 py-4 box-shadow1 radius-16 bg-white">
                                      <img src={info?.logo} className="img-fluid" alt="" />
                                      <h2 className="text-clr-light-black fs-4 fw-bold my-4">{info?.title}</h2>
                                      <p className="text-clr-gray">{info?.pra}</p>
                                  </div>
                              </div>
                          </div>
                      );
                  })}
                          </div>
              </div>
          </div>
      </div>
  );
}

export default Outcome
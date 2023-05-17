
import './CaseFeature.scss'
import readmore from '../../assets/images/readmore.svg'
import { caseData } from '../../data';

const CaseFeature = () => {
  return (
      <div className="caseFeature section-padding">
          <div className="container">
              <div className="caseFeatureWrapper">
                  {caseData.map((val) => {

                    const featList = val.feat?.split('|');

                    console.log(featList);

                      return (
                          <div className={`row flex-lg-row flex-column-reverse align-items-center ${val.reverseClass && val.reverseClass}`} key={val.id}>
                              <div className="col-lg-6">
                                  <div className="caseFeature-img">
                                      <img src={val.img} className="img-fluid" alt="caseimg" />
                                  </div>
                              </div>
                              <div className="col-lg-6">
                                  <div className="caseFeature-content">
                                      <h1 className="caseNumber">0{val.id}</h1>
                                      <h2 className="fs-36 fw-bold text-clr-secondary">{val?.title}</h2>
                                      <p className="fs-6 text-clr-dark3 mt-3">
                                      {val?.pra}
                                      </p>

                                      {val.feat && featList.map((list, index)=>{

                                       return (
                                           <div className="d-flex align-items-center justify-content-start gap-3 mb-3" key={index}>
                                               <span>
                                                   <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                       <path
                                                           d="M19.3744 0.568848H17.7361C17.5064 0.568848 17.2885 0.674316 17.1478 0.854785L7.48456 13.0962L2.85097 7.2251C2.78087 7.1361 2.69153 7.06414 2.58964 7.01462C2.48775 6.9651 2.37597 6.9393 2.26268 6.93916H0.624403C0.467371 6.93916 0.380653 7.11963 0.476746 7.2415L6.89628 15.3743C7.19628 15.754 7.77284 15.754 8.07518 15.3743L19.5221 0.868848C19.6182 0.749316 19.5314 0.568848 19.3744 0.568848Z"
                                                           fill="#0E1552"
                                                       />
                                                   </svg>
                                               </span>
                                               <p className='m-0'>{list}</p>
                                           </div>
                                       );

                                      })}
                                      <a href="" className="text-decoration-none fs-18 fw-medium text-clr-secondary my-4 d-block">
                                          Learn More{" "}
                                          <span className="ps-2">
                                              <img src={readmore} className="img-fluid" alt="" />
                                          </span>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      );
                  })}
              </div>
          </div>
      </div>
  );
}

export default CaseFeature
import './Footer.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
const Footer = () => {
   return (
      <footer className="footer-section">
         <div className="container">
            <div className="footer-cta pt-5 pb-5">
               <div className="row">
                  <div className="col-xl-4 col-md-4 mb-30">
                     <div className="single-cta">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="40"
                           height="40"
                           viewBox="0 0 24 24"
                           style={{ fill: "var(--orange)", transform: "", msFilter: "" }}
                        >
                           <path d="M11.42 21.815a1.004 1.004 0 0 0 1.16 0C12.884 21.598 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.996c-.029 6.444 7.116 11.602 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.004.021 4.438-4.388 8.423-6 9.731-1.611-1.308-6.021-5.293-6-9.735 0-3.309 2.691-6 6-6z"></path>
                        </svg>                        <div className="cta-text">
                           <h4>Find us</h4>
                           <span>1010 Avenue, sw 54321, chandigarh</span>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-md-4 mb-30">
                     <div className="single-cta">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="40"
                           height="40"
                           viewBox="0 0 24 24"
                           style={{ fill: "var(--orange)", transform: "", msFilter: "" }}
                        >
                           <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path>
                        </svg>                        <div className="cta-text">
                           <h4>Call us</h4>
                           <span>870577832490</span>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-md-4 mb-30">
                     <div className="single-cta">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="40"
                           height="40"
                           viewBox="0 0 24 24"
                           style={{ fill: "var(--orange)", transform: "", msFilter: "" }}
                        >
                           <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
                        </svg>
                        <div className="cta-text">
                           <h4>Mail us</h4>
                           <span>mail@info.com</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="footer-content pt-5 pb-5">
               <div className="row">
                  <div className="col-xl-4 col-lg-4 mb-50" id='first-foot'>
                     <div className="footer-widget">
                        <div className="footer-logo">
                           <a href="index.html">
                              <img
                                 src={Logo}
                                 className="img-fluid"
                                 alt="logo"
                              />
                           </a>
                        </div>
                        <div className="footer-text">
                           <p>
                              In here we will help you to shape and build your ideal body and live up your life to fullest

                           </p>
                        </div>

                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                     <div className="footer-widget">
                        <div className="footer-widget-heading">
                           <h3>Useful Links</h3>
                        </div>
                        <ul>
                           <li>
                              <Link to={'/'}>Home</Link>
                           </li>
                           <li>
                              <Link to={'/programs'}>Programs</Link>
                           </li>
                           <li>
                              <Link to={'/mentwell'}>Mental Wellness</Link>
                           </li>
                           <li>
                              <Link to={'/bmi'}>BMI calculator</Link>
                           </li>
                           <li>
                              <Link to={'/recipe'}>Recipes</Link>
                           </li>


                        </ul>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                     <div className="footer-widget">
                        <div className="footer-widget-heading">
                           <h3>Follow us </h3>
                        </div>
                        <div className="footer-text mb-25">
                           <p>
                              Don’t miss to subscribe to our social media
                           </p>
                        </div>
                        <div className="footer-social-icon">
                           <Link to={''} i>
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="24"
                                 height="24"
                                 viewBox="0 0 24 24"
                                 style={{ fill: "white" }}
                              >
                                 <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                 <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                 <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                              </svg>

                           </Link>
                           <Link>
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="24"
                                 height="24"
                                 viewBox="0 0 24 24"
                                 style={{ fill: "white" }}
                              >
                                 <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
                              </svg>

                           </Link>
                           <Link>
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="24"
                                 height="24"
                                 viewBox="0 0 24 24"
                                 style={{ fill: "white" }}
                              >
                                 <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                                 ></path>
                              </svg></Link>
                           <Link>
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="24"
                                 height="24"
                                 viewBox="0 0 24 24"
                                 style={{ fill: "white" }}
                              >
                                 <circle cx="4.983" cy="5.009" r="2.188"></circle>
                                 <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                              </svg></Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="copyright-area">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                     <div className="copyright-text">
                        <p>
                           Copyright &copy; 2024, All Right Reserved{" "}
                           <a href="https://nuralliv.github.io/final/">Nurali</a>
                        </p>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </footer>

   )
}

export default Footer
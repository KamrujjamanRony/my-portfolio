import { motion } from "framer-motion";

const AboutMe = ({activeMenu}) => {
    return (
        <motion.section
              data-id="about-me"
              className={`animated-section ${activeMenu==="about-me" ? "section-active" : "ps--active-y"} `}
              data-ps-id="22353e9c-52a4-9111-8bd9-8daa140cfdc2"
              intial={{ width: 0, opacity: 0}}
              animate={{ width: "100%", opacity: 1 }}
              exit={{ x: window.innerWidth, opacity: 0, transition: { duration: 0.4 }}}
            >
              <div className="page-title">
                <h2>
                  About <span>Me</span>
                </h2>
              </div>

              <div className="section-content">
                {/* <!-- Personal Information --> */}
                <div className="row">
                  <div className="col-xs-12 col-sm-7">
                    <p>
                    Passionate front-end developer with a keen eye for detail and a desire to create stunning, intuitive, and engaging user interfaces. Deep understanding of HTML, CSS, and JavaScript, with particular interest in React.js and Redux. Dedicated to writing clean, maintainable code that adheres to best practices and industry standards. Strong collaborator with excellent communication skills and a passion for development. Always striving to learn and grow as a developer, and excited about the endless possibilities of front-end development.
                    </p>
                  </div>

                  <div className="col-xs-12 col-sm-5">
                    <div className="info-list">
                      <ul>
                        <li>
                          <span className="title">Age</span>
                          <span className="value">25</span>
                        </li>

                        <li>
                          <span className="title">Residence</span>
                          <span className="value">Bangladesh</span>
                        </li>

                        <li>
                          <span className="title">Address</span>
                          <span className="value">Bokharia Mosque, Rupsa, Khulna</span>
                        </li>

                        <li>
                          <span className="title">E-mail</span>
                          <span className="value">kamrujjaman0228@gmail.com</span>
                        </li>

                        <li>
                          <span className="title">Phone</span>
                          <span className="value">+ 01763 137836</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!-- End of Personal Information --> */}

                <div className="white-space-50"></div>

                {/* <!-- Services --> */}
                <div className="row">
                  <div className="col-xs-12 col-sm-12">
                    <div className="block-title">
                      <h3>
                        What <span>I Do</span>
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="col-inner">
                      <div className="info-list-w-icon">
                        <div className="info-block-w-icon">
                          <div className="ci-icon">
                            <i className="lnr lnr-store"></i>
                          </div>
                          <div className="ci-text">
                            <h4>UI/UX Designer</h4>
                            <p>
                            I create visually appealing and intuitive user interfaces that provide seamless experiences across all devices, ensuring that users enjoy their time spent on a website or application.
                            </p>
                          </div>
                        </div>
                        <div className="info-block-w-icon">
                          <div className="ci-icon">
                            <i className="lnr lnr-laptop-phone"></i>
                          </div>
                          <div className="ci-text">
                            <h4>Web Developer</h4>
                            <p>
                            I write clean, organized code using HTML, CSS, and JavaScript, as well as various frameworks such as React, Angular, and Vue.js, to create websites and applications that are responsive and efficient.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xs-12 col-sm-6">
                    <div className="col-inner">
                      <div className="info-list-w-icon">
                        <div className="info-block-w-icon">
                          <div className="ci-icon">
                            <i className="lnr lnr-pencil"></i>
                          </div>
                          <div className="ci-text">
                            <h4>Team Collaborator</h4>
                            <p>
                            I collaborate with back-end developers, and project managers to ensure the success of projects through effective communication to make sure that everyone is aligned and working together towards common goals.
                            </p>
                          </div>
                        </div>
                        <div className="info-block-w-icon">
                          <div className="ci-icon">
                            <i className="lnr lnr-flag"></i>
                          </div>
                          <div className="ci-text">
                            <h4>Lifelong Learner</h4>
                            <p>
                            I am always seeking to improve and grow as a developer, staying up-to-date with the latest trends and technologies in the front-end development world, and continually learning new techniques to stay ahead of the curve.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End of Services --> */}
              </div>
            </motion.section>
    );
};

export default AboutMe;
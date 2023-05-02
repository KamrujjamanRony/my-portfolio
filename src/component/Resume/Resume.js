import { Link } from "react-router-dom";
import lwsCertificateImg from "../../assets/images/LWS-Certificate.jpg";
import lwsRecommendationImg from "../../assets/images/LWS-Recommendation-Letter.jpg";
import { motion } from "framer-motion";

const Resume = ({activeMenu}) => {
    return (
        <motion.section
              data-id="resume"
              className={`animated-section ${activeMenu==="resume" ? "section-active" : "ps--active-y"} `}
              data-ps-id="7d918634-5594-f434-9725-af3dd55b1b19"
              intial={{ width: 0, opacity: 0}}
              animate={{ width: "100%", opacity: 1 }}
              exit={{ x: window.innerWidth, opacity: 0, transition: { duration: 0.4 }}}
            >
              <div className="page-title">
                <h2>Resume</h2>
              </div>

              <div className="section-content">
                <div className="row">
                  <div className="col-xs-12 col-sm-7">
                    <div className="block-title">
                      <h3>Education</h3>
                    </div>

                    <div className="timeline timeline-second-style clearfix">
                      <div className="timeline-item clearfix">
                        <div className="left-part">
                          <h5 className="item-period">2019 - Present</h5>                        
                        </div>
                        <div className="divider"></div>
                        <div className="right-part">
                          <h4 className="item-title">BSc in Computer Science & Engineering</h4>
                          <span className="item-company">
                            Northern University Of Business & Technology, Khulna
                          </span>
                        </div>
                      </div>

                      <div className="timeline-item clearfix">
                        <div className="left-part">
                          <h5 className="item-period">2017</h5>
                        </div>
                        <div className="divider"></div>
                        <div className="right-part">
                          <h4 className="item-title">Diplome In Fisheries</h4>
                          <span className="item-company">
                            Fisheries Training Institute, Chandpur
                          </span>
                        </div>
                      </div>

                      <div className="timeline-item clearfix">
                        <div className="left-part">
                          <h5 className="item-period">2017</h5>
                        </div>
                        <div className="divider"></div>
                        <div className="right-part">
                          <h4 className="item-title">HSC</h4>
                          <span className="item-company">
                            Dr. Md. Sahidul Islam Degree College
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="white-space-50"></div>

                    <div className="block-title">
                      <h3>Experience</h3>
                    </div>

                    <div className="timeline timeline-second-style clearfix">
                      <div className="timeline-item clearfix">
                        <div className="left-part">
                          <h5 className="item-period">2018 - Present</h5>
                          <span className="item-company">Gemini Sea Food Limited</span>
                        </div>
                        <div className="divider"></div>
                        <div className="right-part">
                          <h4 className="item-title">Quality Control Officer</h4>
                          <p>
                          As a Quality Control Officer, I ensure products meet quality standards by developing processes for inspections, documentation, and liaising with regulatory authorities for compliance with food safety regulations.
                          </p>
                        </div>
                      </div>

                      <div className="timeline-item clearfix">
                        <div className="left-part">
                          <h5 className="item-period">2021 - 2023</h5>
                          <span className="item-company">Yes IT Limited</span>
                        </div>
                        <div className="divider"></div>
                        <div className="right-part">
                          <h4 className="item-title">Frontend Developer</h4>
                          <p>
                          I developed and maintained web application UIs using Redux, React.js, Node.js, Express.js, MongoDB, JavaScript, Bootstrap5, Tailwind CSS, HTML5, and CSS3. I built complex interfaces, integrated with backends, and optimized databases for improved performance while adhering to web standards.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Skills & Certificates --> */}
                  <div className="col-xs-12 col-sm-5">
                    {/* <!-- Design Skills --> */}
                    <div className="block-title">
                      <h3>
                        Frontend <span>Development</span>
                      </h3>
                    </div>

                    <div className="skills-info skills-second-style">
                      {/* <!-- Skill 1 --> */}
                      <div className="skill clearfix">
                        <h4>React.js</h4>
                        <div className="skill-value">100%</div>
                      </div>
                      <div className="skill-container skill-7">
                        <div className="skill-percentage"></div>
                      </div>
                      {/* <div className="skill clearfix">
                        <h4>React.js</h4>
                        <div className="skill-value">95%</div>
                      </div>
                      <div className="skill-container skill-1">
                        <div className="skill-percentage"></div>
                      </div> */}
                      {/* <!-- End of Skill 1 --> */}

                      {/* <!-- Skill 2 --> */}
                      <div className="skill clearfix">
                        <h4>Redux</h4>
                        <div className="skill-value">100%</div>
                      </div>
                      <div className="skill-container skill-7">
                        <div className="skill-percentage"></div>
                      </div>
                      {/* <!-- End of Skill 2 --> */}

                      {/* <!-- Skill 3 --> */}
                      <div className="skill clearfix">
                        <h4>JavaScript</h4>
                        <div className="skill-value">100%</div>
                      </div>
                      <div className="skill-container skill-7">
                        <div className="skill-percentage"></div>
                      </div>
                      {/* <!-- End of Skill 3 --> */}

                      {/* <!-- Skill 4 --> */}
                      <div className="skill clearfix">
                        <h4>Tailwind CSS</h4>
                        <div className="skill-value">100%</div>
                      </div>
                      <div className="skill-container skill-7">
                        <div className="skill-percentage"></div>
                      </div>
                      {/* <!-- End of Skill 5 --> */}
                      {/* <!-- Skill 5 --> */}
                      <div className="skill clearfix">
                        <h4>Bootstrap5</h4>
                        <div className="skill-value">100%</div>
                      </div>
                      <div className="skill-container skill-7">
                        <div className="skill-percentage"></div>
                      </div>
                      {/* <!-- End of Skill 5 --> */}
                      {/* <!-- Skill 6 --> */}
                      <div className="skill clearfix">
                        <h4>HTML5</h4>
                        <div className="skill-value">100%</div>
                      </div>
                      <div className="skill-container skill-7">
                        <div className="skill-percentage"></div>
                      </div>
                      {/* <!-- End of Skill 6 --> */}
                      {/* <!-- Skill 7 --> */}
                      <div className="skill clearfix">
                        <h4>CSS3</h4>
                        <div className="skill-value">100%</div>
                      </div>
                      <div className="skill-container skill-7">
                        <div className="skill-percentage"></div>
                      </div>
                      {/* <!-- End of Skill 7 --> */}
                    </div>
                    {/* <!-- End of Design Skills --> */}

                    <div className="white-space-10"></div>

                    {/* <!-- Coding Skills --> */}
                    <div className="block-title">
                      <h3>
                        Backend <span>Development</span>
                      </h3>
                    </div>

                    <div className="skills-info skills-second-style">
                      {/* <!-- Skill 8 --> */}
                      <div className="skill clearfix">
                        <h4>Node.js</h4>
                        <div className="skill-value">95%</div>
                      </div>
                      <div className="skill-container skill-5">
                        <div className="skill-percentage"></div>
                      </div>
                      {/* <!-- End of Skill 8 --> */}

                      {/* <!-- Skill 9 --> */}
                      <div className="skill clearfix">
                        <h4>Express.js</h4>
                        <div className="skill-value">90%</div>
                      </div>
                      <div className="skill-container skill-4">
                        <div className="skill-percentage"></div>
                      </div>
                      {/* <!-- End of Skill 9 --> */}

                      {/* <!-- Skill 10 --> */}
                      <div className="skill clearfix">
                        <h4>MongoDB</h4>
                        <div className="skill-value">100%</div>
                      </div>
                      <div className="skill-container skill-7">
                        <div className="skill-percentage"></div>
                      </div>
                      {/* <!-- End of Skill 10 --> */}

                      {/* <!-- Skill 11 --> */}
                      <div className="skill clearfix">
                        <h4>JWT</h4>
                        <div className="skill-value">90%</div>
                      </div>
                      <div className="skill-container skill-9">
                        <div className="skill-percentage"></div>
                      </div>
                      {/* <!-- End of Skill 11 --> */}

                    </div>
                    {/* <!-- End of Coding Skills --> */}

                    <div className="white-space-10"></div>

                    {/* <!-- Knowledges --> */}
                    <div className="block-title">
                      <h3>Knowledges</h3>
                    </div>

                    <ul className="knowledges">
                      <li>Redux</li>
                      <li>MERN Stack</li>
                      <li>JavaScript</li>
                      <li>GitHub</li>
                      <li>Firebase</li>
                      <li>Frontend</li>
                      <li>Debug</li>
                      <li>Responsive</li>
                      <li>Browser Dev-tool</li>
                      <li>Figma</li>
                    </ul>
                    {/* <!-- End of Knowledges --> */}
                  </div>
                  {/* <!-- End of Skills & Certificates --> */}
                </div>

                <div className="white-space-50"></div>

                {/* <!-- Certificates --> */}
                <div className="row">
                  <div className="col-xs-12 col-sm-12">
                    <div className="block-title">
                      <h3>Certificates</h3>
                    </div>
                  </div>
                </div>

                <div className="row">
                  {/* <!-- Certificate 1 --> */}
                  <Link className="col-xs-12 col-sm-6" to="https://drive.google.com/file/d/1RzAe9ME-Re527Habg7JrF5iv8TPitgAg/view?usp=share_link" target={"_blank"} open>
                    <div className="certificate-item clearfix">
                      <div className="certi-logo">
                        <img
                          src={lwsCertificateImg}
                          alt="logo"
                        />
                      </div>

                      <div className="certi-content">
                        <div className="certi-title">
                          <h4>Think in a Redux way Course</h4>
                        </div>
                        <div className="certi-id">
                          <span>Membership ID: : LWSCTXN-FTETOBU6</span>
                        </div>
                        <div className="certi-date">
                          <span>08 April 2023</span>
                        </div>
                        <div className="certi-company">
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  {/* <!-- End of Certificate 1 --> */}

                  {/* <!-- Certificate 2 --> */}
                  <Link className="col-xs-12 col-sm-6" to="https://drive.google.com/file/d/164YjKVNe2aVMSJDXGeTw7LQRUTNfvLe6/view?usp=share_link" target={"_blank"} download>
                    <div className="certificate-item clearfix">
                      <div className="certi-logo">
                        <img
                          src={lwsRecommendationImg}
                          alt="logo"
                        />
                      </div>

                      <div className="certi-content">
                        <div className="certi-title">
                          <h4>Performance Certificates</h4>
                        </div>
                        <div className="certi-id">
                          <span>Recommendation Letter</span>
                        </div>
                        <div className="certi-date">
                          <span>24 April 2023</span>
                        </div>
                        <br/>
                        <div className="certi-company">
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  {/* <!-- End of Certificate 2 --> */}
                </div>
                {/* <!-- End of Certificates --> */}
              </div>
            </motion.section>
    );
};

export default Resume;
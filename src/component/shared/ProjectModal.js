import { RxCross1 } from "react-icons/rx";
import { FaUser, FaGlobe, FaCalendar } from "react-icons/fa";

const ProjectModal = ({ id, open, setOpened, control, projects }) => {
  const project = projects.find((p) => p.id === id);
  return (
    open && (
      <>
        <div onClick={control} className="project-modal"></div>
        <div className="modal-container">
          <div className="ajax-page-nav">
            <div className="nav-item ajax-page-close-button">
              <a id="ajax-page-close-button" onClick={control}>
                <RxCross1 className="fs-1" />
              </a>
            </div>
          </div>
          <div className="ajax-page-title">
            <h1>{project?.name}</h1>
          </div>

          <div className="row">
            <div className="col-sm-8 col-md-8 portfolio-block">
              <img src={project?.img1} className="mb-4 img-fluid" alt="" />
              <img src={project?.img2} className="mb-4 img-fluid" alt="" />
              <img src={project?.img3} className="mb-4 img-fluid" alt="" />
            </div>
            <div className="col-sm-4 col-md-4 portfolio-block">
              {/* <!-- Project Description --> */}
              <div className="project-description">
                <div className="block-title">
                  <h3>Description</h3>
                </div>
                <ul className="project-general-info">
                  <li>
                    <p style={{ display: "flex" ,justifyItems: "center", alignItems: "center"}}>
                      <FaUser style={{color: "#04B0DC", marginRight: "10px"}} /> Md. Kamrujjaman
                    </p>
                  </li>
                  <li>
                    <p style={{ display: "flex" ,justifyItems: "center", alignItems: "center"}}>
                      <FaGlobe style={{color: "#04B0DC", marginRight: "10px"}} />
                      <a href={project?.link} target="_blank" rel="noreferrer">
                        {project?.link}
                      </a>
                    </p>
                  </li>
                  <li>
                    <p style={{ display: "flex" ,justifyItems: "center", alignItems: "center"}}>
                      <FaCalendar style={{color: "#04B0DC", marginRight: "10px"}} /> 25 december, 2016
                    </p>
                  </li>
                </ul>

                <p className="text-justify">{project?.description}</p>
                {/* <!-- /Project Description --> */}

                {/* <!-- Features --> */}
                <div className="tags-block">
                  <div className="block-title">
                    <h3>Features</h3>
                  </div>
                  <ul className="tags">
                    {project?.details.map((detail, index) => (
                      <li key={index}>{detail.step}</li>
                    ))}
                  </ul>
                </div>
                {/* <!-- /Features --> */}

                {/* <!-- Technology --> */}
                <div className="tags-block">
                  <div className="block-title">
                    <h3>Technology</h3>
                  </div>
                  <ul className="tags">
                    {project?.tools?.map((tool) => (
                      <li>
                        <a>{tool}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <!-- /Technology --> */}

                {/* <!-- Share Buttons --> */}
                <div className="btn-group share-buttons">
                  <div className="block-title">
                    <h3>Share</h3>
                  </div>
                  <a href="#" target="_blank" className="btn">
                    <i className="fab fa-facebook-f"></i>{" "}
                  </a>
                  <a href="#" target="_blank" className="btn">
                    <i className="fab fa-twitter"></i>{" "}
                  </a>
                  <a href="#" target="_blank" className="btn">
                    <i className="fab fa-dribbble"></i>{" "}
                  </a>
                </div>
                {/* <!-- /Share Buttons --> */}
              </div>
              {/* <!-- Project Description --> */}
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default ProjectModal;

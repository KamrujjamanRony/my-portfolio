import post1 from "../../assets/images/blog_post_1.jpg";
import post2 from "../../assets/images/blog_post_2.jpg";
import post3 from "../../assets/images/blog_post_3.jpg";
import post4 from "../../assets/images/blog_post_4.jpg";

const Blog = ({activeMenu}) => {
  return (
    <section
      data-id="blog"
      className={`animated-section ${activeMenu==="blog" ? "section-active" : "ps--active-y"} `}
      data-ps-id="fd964f79-1903-c72b-9fbb-0e290a9b587b"
    >
      <div className="page-title">
        <h2>Blog</h2>
      </div>

      <div className="section-content">
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div
              className="blog-masonry two-columns clearfix"
              style={{ position: "relative", height: "644.708px" }}
            >
              {/* <!-- Blog Post 1 --> */}
              <div
                className="item post-1"
                style={{
                  position: "absolute",
                  left: "0px",
                  top: "0px",
                }}
              >
                <div className="blog-card">
                  <div className="media-block">
                    <div className="category">
                      <a
                        href="https://lmpixels.com/demo/breezycv/dark/1/index.html#"
                        title="View all posts in Design"
                      >
                        UI/UX Design
                      </a>
                    </div>
                    <a href="https://lmpixels.com/demo/breezycv/dark/1/blog-post-1.html">
                      <img
                        src={post1}
                        className="size-blog-masonry-image-two-c"
                        alt="Why I Switched to Sketch For UI Design"
                        title=""
                      />
                      <div className="mask"></div>
                    </a>
                  </div>
                  <div className="post-info">
                    <div className="post-date">05 Mar 2023</div>
                    <a href="https://lmpixels.com/demo/breezycv/dark/1/blog-post-1.html">
                      <h4 className="blog-item-title">
                      Designing for Delight: The Power of UI/UX in Creating Memorable User Experiences
                      </h4>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- End of Blog Post 1 --> */}

              {/* <!-- Blog Post 2 --> */}
              <div
                className="item post-2"
                style={{
                  position: "absolute",
                  left: "405px",
                  top: "0px",
                }}
              >
                <div className="blog-card">
                  <div className="media-block">
                    <div className="category">
                      <a
                        href="https://lmpixels.com/demo/breezycv/dark/1/index.html#"
                        title="View all posts in UI"
                      >
                        Web Development
                      </a>
                    </div>
                    <a href="https://lmpixels.com/demo/breezycv/dark/1/blog-post-1.html">
                      <img
                        src={post2}
                        className="size-blog-masonry-image-two-c"
                        alt="Best Practices for Animated Progress Indicators"
                        title=""
                      />
                      <div className="mask"></div>
                    </a>
                  </div>
                  <div className="post-info">
                    <div className="post-date">23 Feb 2023</div>
                    <a href="https://lmpixels.com/demo/breezycv/dark/1/blog-post-1.html">
                      <h4 className="blog-item-title">
                      Unleashing the Power of the Web: A Journey into the World of Web Development
                      </h4>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- End of Blog Post 2 --> */}

              {/* <!-- Blog Post 3 --> */}
              <div
                className="item post-1"
                style={{
                  position: "absolute",
                  left: "0px",
                  top: "322px",
                }}
              >
                <div className="blog-card">
                  <div className="media-block">
                    <div className="category">
                      <a
                        href="https://lmpixels.com/demo/breezycv/dark/1/index.html#"
                        title="View all posts in Design"
                      >
                        Problem Solving
                      </a>
                    </div>
                    <a href="https://lmpixels.com/demo/breezycv/dark/1/blog-post-1.html">
                      <img
                        src={post3}
                        className="size-blog-masonry-image-two-c"
                        alt="Designing the Perfect Feature Comparison Table"
                        title=""
                      />
                      <div className="mask"></div>
                    </a>
                  </div>
                  <div className="post-info">
                    <div className="post-date">06 Feb 2023</div>
                    <a href="https://lmpixels.com/demo/breezycv/dark/1/blog-post-1.html">
                      <h4 className="blog-item-title">
                      Cracking the Code: The Art of Problem Solving in Software Development
                      </h4>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- End of Blog Post 3 --> */}

              {/* <!-- Blog Post 4 --> */}
              <div
                className="item post-2"
                style={{
                  position: "absolute",
                  left: "405px",
                  top: "322px",
                }}
              >
                <div className="blog-card">
                  <div className="media-block">
                    <div className="category">
                      <a
                        href="https://lmpixels.com/demo/breezycv/dark/1/index.html#"
                        title="View all posts in E-Commerce"
                      >
                        Team Work
                      </a>
                    </div>
                    <a href="https://lmpixels.com/demo/breezycv/dark/1/blog-post-1.html">
                      <img
                        src={post4}
                        className="size-blog-masonry-image-two-c"
                        alt="An Overview of E-Commerce Platforms"
                        title=""
                      />
                      <div className="mask"></div>
                    </a>
                  </div>
                  <div className="post-info">
                    <div className="post-date">07 Jan 2023</div>
                    <a href="https://lmpixels.com/demo/breezycv/dark/1/blog-post-1.html">
                      <h4 className="blog-item-title">
                      Synergy in Action: How Collaboration and Productivity Drive Team Succes
                      </h4>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- End of Blog Post 4 --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

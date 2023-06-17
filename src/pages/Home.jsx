import NavBar from "../components/NavBar";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <section className="heroSec d-flex">
        <NavBar />
        <div className="hero-top">
          <img src="/images/Ellipse 1293.png" alt="" />
        </div>
        <div className="hero-right">
          <div className="container">
            <h4 className="right-heading-top">Welcome to the</h4>
            <h1 className="right-heading">
              Unprecedented <br />
              Era of
              <span> Real Estate Investing</span>
            </h1>
            <p>
              Lilypads uses sophisticated technologies for data-driven decisions
              in investing, managing and funding commercial real estate assets
            </p>
            <button className="hero-right-btn">Start Investing Now </button>
            <div className="right-box-bottom">
              <div className="right-box-item">
                <h3>658+</h3>
                <p>Properties Registered</p>
              </div>
              <div className="right-box-item">
                <h3>685+</h3>
                <p>Deals Cracked</p>
              </div>
              <div className="right-box-item">
                <h3>255+</h3>
                <p>Investors</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-left">
          <div className="left-image1-container">
            <img src="/images/img1.png" alt="" className="left-image1" />
            <img src="/images/img2.png" alt="" className="left-image2" />
          </div>
          <div className="left-image2-container">
            <img src="/images/img3.png" alt="" className="left-image3" />
          </div>
        </div>
      </section>
      <section className="aboutSec">
        <div className="about-container">
          <div className="about-boxes border1">
            <h4 className="about-boxes-heading-top">About Us</h4>
            <h2 className="about-boxes-heading">
              Lillypad is the only Real Estate Investment tool you need for your
              business
            </h2>
          </div>
          <div className="about-boxes border2 border5 border6">
            <div className="about-box-inner">
              <div className="inner-image">
                <img src="/images/Group 48096377.svg" alt="" />
              </div>
              <h6 className="about-box-inner-heading">
                Become a Data-Driven Investor
              </h6>
            </div>
            <p>
              Lilypads is the cloud-based real estate investment platform that
              helps you make data-driven investment decisions and assists with
              reaching your long term investment objectives.
            </p>
          </div>
          <div className="about-boxes border3">
            <div className="about-box-inner">
              <div className="inner-image new-width">
                <img src="/images/Group 48096378.svg" alt="" />
              </div>
              <h6 className="about-box-inner-heading">
                Lilypads can help you make smarter decisions.
              </h6>
            </div>
            <p>
              Streamline your investment evaluation process and collaborate in
              reaching your long term investment objectives
            </p>
          </div>
          <div className="about-boxes">
            <div className="about-box-inner">
              <div className="inner-image">
                <img src="/images/Group 48096376.svg" alt="" />
              </div>
              <h6 className="about-box-inner-heading">Manager Due Diligence</h6>
            </div>
            <p>
              Evaluate managers against your objectives using traditional risk
              metrics with the addition of factor analysis. All it takes is a
              set of returns
            </p>
          </div>
          <div className="about-boxes border4 border7">
            <div className="about-box-inner">
              <div className="inner-image">
                <img src="/images/Group 48096375.svg" alt="" />
              </div>
              <h6 className="about-box-inner-heading">
                Optimize Asset Allocation
              </h6>
            </div>
            <p>
              Understand the underlying risk drivers in your portfolio using the
              Lilypads analysis factors and then optimize that portfolio based
              on objectives
            </p>
          </div>
          <div className="about-boxes">
            <div className="about-box-inner">
              <div className="inner-image">
                <img src="/images/Group 48096374.svg" alt="" />
              </div>
              <h6 className="about-box-inner-heading">Our Subscribers</h6>
            </div>
            <p>
              Serving a constellation of global subscribers Pension funds, Funds
              of Funds, Banks, Family offices, Asset managers, Wealth Managers
            </p>
          </div>
        </div>
      </section>
      <section className="footer-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="footer-right">
                <div className="news-letter">
                  <input type="email" placeholder="Enter Your Email Here" />
                  <button>Subscribe To Newsletter</button>
                </div>
                <h2>Signup and start enjoying the benifits today!</h2>
                <button className="footer-btn">Signup To Lilypads</button>
                <div className="social-links">
                  <div className="social-link margin-right">
                    <FaFacebook />
                  </div>
                  <div className="social-link">
                    <AiOutlineTwitter />
                  </div>
                  <div className="social-link">
                    <ImLinkedin2 />
                  </div>
                  <div className="social-link">
                    <FaYoutube />
                  </div>
                  <div className="social-link">
                    <FaMediumM />
                  </div>
                  <div className="social-link">
                    <FaPinterestP />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer-left">
                <div className="footer-left-items">
                  <div className="logo">
                    <img src="/images/logo.svg" alt="" />
                  </div>
                  <div className="footer-left-item">
                    <h6>Network</h6>
                    <p>Community</p>
                    <p>Investor</p>
                    <p>Broker</p>
                  </div>
                  <div className="footer-left-item">
                    <h6>Technology</h6>
                    <p>Artificial Intelligence</p>
                    <p>Block Chain</p>
                  </div>
                </div>
                <div className="footer-left-items">
                  <div className="footer-left-item">
                    <h6>Reach Us At</h6>
                    <p>
                      6751 Columbia Gateway Dr., 3rd floor, Columbia, MD 21046
                    </p>
                  </div>
                  <div className="footer-left-item">
                    <h6>Product</h6>
                    <p>Invest</p>
                    <p>Discover</p>
                    <p>Transact</p>
                    <p>Manage</p>
                  </div>
                  <div className="footer-left-item">
                    <h6>Highlights</h6>
                    <p>
                      Impact of COVID-19 on the food and beverage industry and
                      the retail sector
                    </p>
                    <p>
                      Commercial lending during COVID-19: navigating the impact
                    </p>
                  </div>
                </div>
                <div className="footer-left-items justify-evenly spacing">
                  <div className="footer-left-item ">
                    <h6>Our Story</h6>
                    <p>Approach</p>
                    <p>AboutUs</p>
                  </div>
                  <div className="footer-left-item">
                    <h6>Knowledge Center</h6>
                    <p>Resource</p>
                    <p>Blog</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

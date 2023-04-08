import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Booknow from "./Booknow";
import Umar_Usman from "../Assets/img/png/umar_img.png";
import Rabia_img from "../Assets/img/png/rabia_img.png";
import Yellow_star from "../Assets/img/png/star_img.png";
import Gray_star from "../Assets/img/png/gray_star.png";
import scissors from "../Assets/img/png/Scissors_position.png";
import comma from "../Assets/img/png/comma_position.png";

const Testimonials = () => {
  return (
    <div>
      <Container />
      <Row />
      <Col />
      <section className="bg_sec5 position-relative">
        <img className="scissors_img" src={scissors} alt="img" />
        <Container className="pt-3 pb-5">
          <Row className="align-items-center">
            <Col lg={4} className="pe-0">
              <div className=" position-relative">
                <h3 className="fw_400 fs_18 clr_orange mb-3 ff_jost text-center text-sm-start">
                  Testimonials
                </h3>
                <h3 className=" position-absolute d-md-block d-none fs_64 fw_400 ff_jost testimonial_position">
                  TESTIMONIALS
                </h3>
              </div>
              <h4 className="fs_48 fw_700 mb-3 ff_poppins text-center text-sm-start">
                What Our Clients Say About Us
              </h4>
              <p className="fs_18 fw_400 clr_ABABAB mb-3 ff_jost text-center text-sm-start">
                Let your hairdressers do their amazing job. Trim the hair to get
                your desired look. Book appointment with us for your favorite
                hair Styles!
              </p>
              <div className="pt-3 pb-lg-0 pb-5 d-flex justify-content-center justify-content-sm-start">
                <Booknow title="Give Reviews" id="review_button" />
              </div>
            </Col>
            <Col lg={8}>
              <Row className="justify-content-end gap_68 ">
                <Col xl={5} sm={6} className=" pt-2 pt-sm-0 stars_animation">
                  <div className="d-flex flex-column align-items-center px-4 pt-4  feedback_bg pb-3 testimonial_animation2 position-relative">
                    <img
                      className=" position-absolute comma_img"
                      src={comma}
                      alt="img"
                    />
                    <div className="pt-3 mb-4">
                      <img src={Umar_Usman} alt="Umar Usman" />
                    </div>
                    <p className="mb-3 fs_13 fw_700 clr_C2C2C2 px-3 ff_poppins">
                      It was an amazing experience to get services from the best
                      in its profession Absolutly Enjoyed Every SEcond of it{" "}
                    </p>
                    <div className="d-flex align-items-center justify-content-center mb-1 gap-1">
                      <img
                        className="star_hover"
                        src={Yellow_star}
                        alt="star"
                      />
                      <img
                        className="star_hover2"
                        src={Yellow_star}
                        alt="star"
                      />
                      <img
                        className="star_hover"
                        src={Yellow_star}
                        alt="star"
                      />
                      <img className="star_hover2" src={Gray_star} alt="star" />
                      <img className="star_hover" src={Gray_star} alt="star" />
                    </div>
                    <h3 className="mb-0 fs_15 fw_700 ff_poppins">Umar Usman</h3>
                    <h4 className="fs_12 fw_700 clr_CECECE pb-1 ff_poppins">
                      Regular User
                    </h4>
                  </div>
                </Col>
                <Col xl={5} sm={6} className="pt-2 pt-sm-0">
                  <div className="d-flex flex-column align-items-center pt-4 feedback_bg px-4 pb-3 testimonial_animation position-relative stars_animation">
                    <img
                      className=" position-absolute comma_img"
                      src={comma}
                      alt="img"
                    />
                    <div className="pt-3 mb-4">
                      <img src={Rabia_img} alt="Rabia" />
                    </div>
                    <p className="mb-3 fs_13 fw_700 clr_C2C2C2 px-3 ff_poppins">
                      It was an amazing experience to get services from the best
                      in its profession Absolutly Enjoyed Every SEcond of it{" "}
                    </p>
                    <div className="d-flex align-items-center justify-content-center mb-1 gap-1">
                      <img
                        className="star_hover"
                        src={Yellow_star}
                        alt="star"
                      />
                      <img
                        className="star_hover2"
                        src={Yellow_star}
                        alt="star"
                      />
                      <img
                        className="star_hover"
                        src={Yellow_star}
                        alt="star"
                      />
                      <img
                        className="star_hover2"
                        src={Yellow_star}
                        alt="star"
                      />
                      <img className="star_hover" src={Gray_star} alt="star" />
                    </div>
                    <h3 className="mb-0 fs_15 fw_700 ff_poppins">
                      Rabia Khalil
                    </h3>
                    <h4 className="fs_12 fw_700 clr_CECECE pb-1 ff_poppins">
                      Regular User
                    </h4>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Testimonials;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import main_img from "../Assets/img/png/ABOUT_us.png";
import Booknow from "./Booknow";


const About_us = () => {
  return (
    <div>
      <Container />
      <Row />
      <Col />
      <section className="sec2_bg py-5 ">
        <Container className="py-5 position-relative">
          <Row className="py-1 justify-content-evenly align-items-center">
            <Col sm={6} lg={5} xs={12}>
              <img
                className="w-100 aboutus_img_animation"
                src={main_img}
                alt="img"
              />
            </Col>
            <Col sm={6} lg={5} xs={12}>
              <h4 className="fs_18 fw_400 clr_orange pb-md-4 ff_jost text-center text-sm-start">
                About Us
              </h4>
              <h3 className="fw_700 fs_48 pb-md-2 ff_poppins text-center text-sm-start">
                Best Haircut Salon For Men
              </h3>
              <p className="fw_400 fs_18 clr_darkgray pt-1 pb-md-4 ff_jost text-center text-sm-start">
                Let your hairdressers do their amazing job. Trim the hair to get
                your desired look. Book appointment with us for your favorite
                hair Styles!
              </p>
              <div className="pt-md-3 d-flex justify-content-center justify-content-sm-start">
                <Booknow title="Read more" id="review_button" />
              </div>
            </Col>
          </Row>
          <h4 className="about_background ff_poppins position-absolute d-sm-block d-none">
            ABOUT
          </h4>
        </Container>
      </section>
    </div>
  );
};

export default About_us;

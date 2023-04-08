import React from "react";
import Navbar from "./Navbar";
import hero_img from "../Assets/img/png/hero_img.png";
import Booknow from "./Booknow";
import Servicesbtn from "./Servicesbtn";
import { Col, Container, Row } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <header className="d-flex flex-column bg_hero min-vh-100">
        <Navbar />
        <section className="d-flex flex-grow-1 align-items-center position-relative overflow-hidden">
          <Container>
            <div className="row align-items-center">
              <Col lg={5}>
                <h4 className="fs_16 fw_400 clr_orange pb-3 mb-0 ff_jost text-center text-sm-start">
                  Welcome To Choppers
                </h4>
                <h3 className="fs_48 fw_700 text-white pt-1 pb-3mb-0  ff_poppins text-center text-sm-start">
                  Best Hair Salon For A Professional Look
                </h3>
                <p className="fs_21 fw_400 clr_gray pt-1 pb-xl-5 mb-2 ff_poppins text-center text-sm-start">
                  Choppers offers high performance customized facials to provide
                  you with visible results.
                </p>
                <div className="d-flex flex-xl-row flex-lg-column flex-sm-row flex-column gap_40 pt-4 align-items-center align-items-sm-start ">
                  <Booknow title="Book Now" id="transperant_hover" />
                  <Servicesbtn id="transperant_hover" />
                </div>
              </Col>
              <Col lg={7}>
                <img
                  className=" hero_img w100_992 hero_barber_hover"
                  src={hero_img}
                  alt="cutting"
                />
              </Col>
            </div>
          </Container>
        </section>
      </header>
    </div>
  );
};

export default Header;

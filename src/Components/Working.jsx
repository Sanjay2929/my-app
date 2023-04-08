import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sec4_img from "../Assets/img/png/sec4-img.png";
import Booknow from "./Booknow";
const Working = () => {
  return (
    <div>
      <Container />
      <Row />
      <Col />
      <section className="bg_sec5">
        <Container className="py-4 pe-lg-5">
          <Row className="my-5 align-items-lg-center bg_yellow">
            <Col md={6} className="px-0 object-fit-cover">
              <img className="w-100 h-100" src={Sec4_img} alt="img" />
            </Col>
            <Col md={6} className="ps-sm-5 py-lg-0 py-4">
              <div className=" d-flex flex-column align-items-center align-items-sm-start">
                <div className="position-relative">
                  <h4 className="fs_32 fw_700 text-white mb-1 ps-sm-3 ff_poppins">
                    WORKING DAYS
                  </h4>
                  <h6 className=" position-absolute fs_64 fw_400 clr_ECECEC1A working_position d-lg-block d-none">
                    WORKING
                  </h6>
                </div>
                <h5 className="fs_18 fw_400 mb-4 ff_jost">
                  We are open on all six days in a week{" "}
                </h5>
                <div className="d-flex justify-content-between w_367 timing_underline mb-4 w-100">
                  <p className="mb-1 fw_700 fs_16 text-white ff_poppins">
                    Monday
                  </p>
                  <p className="mb-1 fw_400 fs_13 ff_poppins">9Am to 10pm</p>
                </div>
                <div className="d-flex justify-content-between w_367 timing_underline pt-3 mb-4 w-100">
                  <p className="mb-1 fw_700 fs_16 text-white ff_poppins">
                    Friday
                  </p>
                  <p className="mb-1 fw_400 fs_13 ff_poppins">9Am to 10pm</p>
                </div>
                <div className="mt-2 ">
                  <Booknow title="Book Now" id="border_black" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Working;

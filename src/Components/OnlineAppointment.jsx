import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Booknow from "./Booknow";
import Telephone from "../Assets/img/png/telephone.png";

const OnlineAppointment = () => {
  return (
    <div>
      <Container />
      <Row />
      <Col />

      <section className="bg_sec3 py-3 bg_sec5">
        <Container className="py-5">
          <Row className="py-5 align-items-center justify-content-between">
            <Col lg={7} md={6} xs={12}>
              <h4 className="fs_18 fw_400 clr_orange mb-2 ff_jost text-center text-md-start">
                Book Now
              </h4>
              <h2 className="fw_700 fs_48 text-white pe-xl-5 mt-1 mb-4 ff_poppins text-center text-md-start">
                Book your Appointment Online.
              </h2>
              <p className="clr_B8B8B8 fw_500 fs_20 mt-1 mb-4 ff-poppins text-center text-md-start">
                Get 10% Discount on your first hair
                <span className="d-block">cut by using our website.</span>
              </p>
              <div className="mt-1 d-flex justify-content-center justify-content-md-start">
                <Booknow title="Book Appointment" id="text-white" />
              </div>
            </Col>
            <Col
              lg={4}
              md={6}
              xs={12}
              className=" my-md-0 my-4 d-flex justify-content-center justify-content-md-start"
            >
              <div
                className="d-flex flex-column box_white bg-white align-items-center justify-content-center w-100
              "
              >
                <div className="telephone_bg padding_29_33 mb-2">
                  <img
                    className="telephone_animation"
                    src={Telephone}
                    alt="telephone_img"
                  />
                </div>
                <h4 className="fs_20 fw_700 clr_B8B8B8 mt-1 mb-2 ff_poppins">
                  Call Now
                </h4>
                <h3 className="fs_24 fw_700 mb-0 ff_poppins">0300 7715325</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default OnlineAppointment;

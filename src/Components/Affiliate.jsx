import React from 'react'
import {  Container } from 'react-bootstrap'

const Affiliate = () => {
  return (
    <div>
      <Container />
      <section className="affiliate_bg py-5">
        <Container className="py-5">
          <div className="d-flex flex-column align-items-center justify-content-center py-5">
            <h2 className="fw_400 fs_18 clr_orange mb-3 ff_jost">Affiliate</h2>
            <h3 className="fw_700 fs_36 text-white mb-5 ff_poppins text-center">
              Join Us Become a part of Us by{" "}
              <span className="d-sm-block text-center ">
                becoming an affiliate
              </span>{" "}
            </h3>
            <button className="partner_button bg-transparent ff_poppins">
              Partner Program
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Affiliate
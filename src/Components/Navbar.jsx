import React from "react";
import logo from "../Assets/img/png/Logo.png";
import salon from "../Assets/img/png/Saloon.png";
import Booknow from "./Booknow";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="container py-5">
          <div className="d-flex justify-content-between ">
            <div className="d-flex align-items-center gap-1">
              <img src={logo} alt="logo" />
              <img src={salon} alt="salon" />
            </div>
            <input type="checkbox" className="d-none" id="check" />
            <label htmlFor="check" className=" d-md-none d-flex menuIcon">
              <span></span>
              <span></span>
              <span></span>
            </label>
            <div className="d-flex align-items-center gap100 nav_left0 mob_view ">
              <ul className="d-flex  mb-0 ps-0 gap-lg-5 gap-4 ff_poppins  sm_view">
                <li>
                  <a className="ff_poppins" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="ff_poppins" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="ff_poppins" href="#">
                    Services
                  </a>
                </li>
                <li>
                  <a className="ff_poppins" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <Booknow title="Book Now" id="transperant_hover" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

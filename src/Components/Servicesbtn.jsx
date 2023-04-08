import React from "react";
import PropTypes from "prop-types";
const Servicesbtn = (props) => {
  return (
    <div>
      {" "}
      <button
        id={props.id} 
        className=" p_18_46 fs_15 fw_700 bg-transparent text-white services_btn ff_poppins"
      >
        All Services
      </button>
    </div>
  );
};

export default Servicesbtn;

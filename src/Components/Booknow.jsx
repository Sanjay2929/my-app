import React from "react";
import PropTypes from "prop-types";

const Booknow = (props) => {
  return (
    <div>
      <button
        id={props.id}
        className=" p_18_53 booK_btn border-0 fs_15 fw_700 ff_poppins"
      >
        {props.title}
      </button>
    </div>
  );
};
Booknow.propTypes = {
  title: PropTypes.string.isRequired,
};
Booknow.defaultProps = {
  title: "enter title here",
};
export default Booknow;

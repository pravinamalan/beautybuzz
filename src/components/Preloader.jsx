import React from "react";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Bars } from "react-loader-spinner";

const Loader = ({ height = 80, width = 80, color = "#333" }) => {
  return (
    <div className="loader position-absolute top-50 start-50 translate-middle">
      <Bars
        height={height}
        width={width}
        color={color}
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;

import React from "react";
import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return (
    <div>
      <ClipLoader
        color="#D9D9D9"
        loading={loading}
        cssOverride={override}
        size={200}
      />
    </div>
  );
};

export default Spinner;

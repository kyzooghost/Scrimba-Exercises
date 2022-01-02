import React from "react";

const Checkbox = ({label}) => (
  <div className="form-check">
    <label>
      <input
        type="checkbox"
        name={label}
        className="form-check-input"
      />
      {label}
    </label>
  </div>
);

export default Checkbox;
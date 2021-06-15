import React from "react";

const ButtonOpenFormCreate = ({ onVisible, visibleFormCreate }) => {
  return (
    <div className="btn">
      <button onClick={onVisible} className="create__button">
        {!visibleFormCreate ? "Create user" : "Close form"}
      </button>
    </div>
  );
};

export default ButtonOpenFormCreate;

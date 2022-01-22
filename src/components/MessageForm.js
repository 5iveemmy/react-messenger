import React from "react";
import Attachment from "./svg/Attachment";

const MessageForm = () => {
  return (
    <form className="message_form">
      <label htmlFor="img">
        <Attachment />
      </label>
      <input
        type="file"
        name=""
        id="img"
        accept="image/*"
        style={{ display: "none" }}
      />
    </form>
  );
};

export default MessageForm;

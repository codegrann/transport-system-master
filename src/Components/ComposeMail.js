import React, { useState } from "react";
import "../styles/mailingPage.css";

const ComposeMail = ({ onClose }) => {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const handleSend = () => {
    // Handle sending the email (e.g., via an API request)
    // Close the compose window
    onClose();
  };

  return (
    <div className="compose-mail">
      <div className="inputs">
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className="inputs">
        <textarea
          placeholder="Compose your email..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleSend}>Send</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default ComposeMail;

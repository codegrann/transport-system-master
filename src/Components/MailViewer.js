import React from "react";
import "../styles/mailingPage.css";

const MailViewer = ({ mail }) => {
  return (
    <div>
      {mail ? (
        <div className="mail-viewer">
          <h2 className="mail-subject">{mail.subject}</h2>
          <p className="mail-content">{mail.content}</p>
        </div>
      ) : (
        <p>Select or compose an email to view.</p>
      )}
    </div>
  );
};

export default MailViewer;

import React from "react";

const MailViewer = ({ mail }) => {
  return (
    <div className="mail-viewer">
      {mail ? (
        <div>
          <h2>{mail.subject}</h2>
          <p>{mail.content}</p>
        </div>
      ) : (
        <p>Select or compose an email to view.</p>
      )}
    </div>
  );
};

export default MailViewer;

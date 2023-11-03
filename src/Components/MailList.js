import React from "react";
import "./MailList.css";

const MailList = ({ mails, onMailSelect, onComposeClick }) => {
  return (
    <div className="mail-list">
      <button onClick={onComposeClick}>Compose</button>
      <ul>
        {mails.map((mail) => (
          <li key={mail.id} onClick={() => onMailSelect(mail)}>
            {mail.subject}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MailList;
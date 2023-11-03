import React, { useState, useEffect } from "react";
import MailList from "../Components/MailList";
import MailViewer from "./MailViewer";
import ComposeMail from "./ComposeMail";
import "./styles.css";

const MailingPage = () => {
  const [selectedMail, setSelectedMail] = useState(null);
  const [mails, setMails] = useState([]);
  const [composeMode, setComposeMode] = useState(false);

  // Fetch or load email data, e.g., from an API
  useEffect(() => {
    // Fetch emails and set them in the state
    // You can use a library like Axios to make API requests
  }, []);

  const handleMailSelect = (mail) => {
    setSelectedMail(mail);
  };

  const handleComposeClick = () => {
    setComposeMode(true);
  };

  const handleComposeClose = () => {
    setComposeMode(false);
  };

  return (
    <div className="mailing-page">
      <MailList
        mails={mails}
        onMailSelect={handleMailSelect}
        onComposeClick={handleComposeClick}
      />
      <MailViewer mail={selectedMail} />
      {composeMode && <ComposeMail onClose={handleComposeClose} />}
    </div>
  );
};

export default MailingPage;

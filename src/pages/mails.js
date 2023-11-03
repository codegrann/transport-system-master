import React, { useState, useEffect } from "react";
import MailList from "../Components/MailList";
import MailViewer from "../Components/MailViewer";
import ComposeMail from "../Components/ComposeMail";
import "./styles.css";

const MailingPage = () => {
  const [selectedMail, setSelectedMail] = useState(null);
  const [composeMode, setComposeMode] = useState(false);

  const initialEmails = [
    {
      id: 1,
      subject: "Regarding Your Shipment",
      content:
        "Your shipment will arrive on Monday. Thank you for choosing our services.",
    },
    {
      id: 2,
      subject: "Invoice for Transportation Services",
      content:
        "Attached is the invoice for your recent transportation services. Please review and make payment at your earliest convenience.",
    },
  ];

  const [mails, setMails] = useState(initialEmails);

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

import React, { useState } from "react";
import ChatSidebar from "../Components/ChatSidebar";
import "./styles.css";

const Messages = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [draftMessages, setDraftMessages] = useState({});

  // Assuming you have a list of messages like this
  const messages = [
    {
      id: 1,
      sender: "Accountant",
      content: "Hello! Kindly send the invoice",
    },
    {
      id: 2,
      sender: "Customer",
      content:
        "Hi there! I placed an order but have not received any confirmation",
    },
    // ... more messages
  ];

  const selectMessage = (message) => {
    // Save the draft message to the previously selected chat
    if (selectedMessage) {
      draftMessages[selectedMessage.id] = message.draft;
    }
    setSelectedMessage(message);
  };

  const handleDraftChange = (draft) => {
    const updatedDrafts = { ...draftMessages };
    updatedDrafts[selectedMessage.id] = draft;
    setDraftMessages(updatedDrafts);
  };

  return (
    <div className="messages-container">
      <div className="messages-list">
        {messages.map((message) => (
          <div
            key={message.id}
            className="message-item"
            onClick={() => selectMessage(message)}
          >
            {message.sender}
          </div>
        ))}
      </div>
      {selectedMessage && (
        <ChatSidebar
          message={selectedMessage}
          draftMessage={draftMessages[selectedMessage.id] || ""}
          onDraftChange={handleDraftChange}
        />
      )}
    </div>
  );
};

export default Messages;

import React, { useState } from "react";
import ChatSidebar from "../Components/ChatSidebar";
import "./styles.css";

const Messages = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);

  // Assuming you have a list of messages like this
  const messages = [
    {
      id: 1,
      sender: "Accountant",
      content: "Hello! Kindly send the invoive",
    },
    {
      id: 2,
      sender: "User2",
      content:
        "Hi there! I place an order but have not received any confirmationI place an order but have not received any confirmationI place an order but have not received any confirmation",
    },
    // ... more messages
  ];

  const selectMessage = (message) => {
    setSelectedMessage(message);
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
      {selectedMessage && <ChatSidebar message={selectedMessage} />}
    </div>
  );
};

export default Messages;

import React from "react";

const ChatSidebar = ({ message }) => {
  return (
    <div className="chat-sidebar">
      <div className="chat-header">{message.sender}</div>
      <div className="chat-content">{message.content}</div>
    </div>
  );
};

export default ChatSidebar;

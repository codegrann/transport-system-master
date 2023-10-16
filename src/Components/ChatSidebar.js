import React from "react";
import "./styles.css";

const ChatSidebar = ({ message }) => {
  return (
    <div className="chat-sidebar">
      <div className="chat-header">{message.sender}</div>
      <div className="chat-content">{message.content}</div>
      <div className="chat-reply">
        <input placeholder="reply" />
        <p>
          <i class="bi bi-send"></i>
        </p>
      </div>
    </div>
  );
};

export default ChatSidebar;

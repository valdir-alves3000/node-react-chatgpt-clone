import { Avatar } from "../assets/Avatar";
import "./ChatMessage.css";

export const ChatMessage = ({ message }) => {
  return (
    <div className={`chat-message ${message.user === "gpt" && "chatgpt"}`}>
      <div className="chat-message-center">
        <div className={`avatar ${message.user === "gpt" && "chatgpt"}`}>
          {message.user === "gpt" && <Avatar />}
        </div>

        <div className="message">{message.message}</div>
      </div>
    </div>
  );
};

import { useState } from "react";
import ChatbotWindow from "./ChatbotWindow";
import "./chatbot.css";

export default function ChatbotIcon() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="chatbot-icon" onClick={() => setOpen(true)}>
        💬
      </div>

      {open && <ChatbotWindow onClose={() => setOpen(false)} />}
    </>
  );
}


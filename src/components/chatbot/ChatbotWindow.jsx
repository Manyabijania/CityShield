import { useState } from "react";
import "./chatbot.css";

export default function ChatbotWindow({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setInput("");

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "AI server error 😕" },
      ]);
    }
  };

  return (
    <div className="chatbot-window">
      <div className="chatbot-header">
        Construction Assistant
        <span onClick={onClose}>✖</span>
      </div>

      <div className="chatbot-messages">
        {messages.map((m, i) => (
          <div key={i} className={m.sender}>
            <b>{m.sender === "user" ? "You" : "Bot"}:</b> {m.text}
          </div>
        ))}
      </div>

      <div className="chatbot-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about construction impact..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

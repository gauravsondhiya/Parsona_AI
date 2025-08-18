import React, { useState } from "react";
import { NavLink } from "react-router";
import { useLocation } from "react-router-dom";
const Chats = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
   const location = useLocation();
  const { values } = location.state || {};
let getdata = async ()=>{
  let response  = await fetch("http://localhost:3000/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
   body: JSON.stringify({content: input }),
});

      const data = await response.json();
     let botreply = data.choices[0].message.content

     setTimeout(() => {
      const botMessage = {
        id: Date.now(),
        text: botreply,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000); // 1 second delay for realism
      
 }
  
  // Function to send user message and then bot reply
  const handleSend = () => {
    if (!input.trim()) return;
    getdata()
    const userMessage = { id: Date.now(), text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");  
  };

  return (
    <div className="flex flex-col h-screen bg-black">
      
      {/* Chat area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3  mb-28 sm:w-[60%] mx-auto mt-5">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-xs break-words ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white rounded-br-none"
                  : "bg-gray-300 text-black rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input area */}
      <div className="fixed bottom-4 mt-8 border-white flex gap-5 w-[100%] justify-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type a message..."
          className="bg-white/30  backdrop-blur-md h-15 p-4 w-[50%] rounded-2xl focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chats;

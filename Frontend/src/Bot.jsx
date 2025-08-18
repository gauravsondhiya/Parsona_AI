import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Bot = () => {
   
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const location = useLocation();
  const { values } = location.state || {}; // {aka, tagline, image}

  const datafetch = async () => {
    try {
     
let url = import.meta.env.VITE_BASE_URL;
      console.log(url)
      const method = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: input }),
      };

      const response = await fetch(`${url}/${values.link}`, method);

      const result = await response.json();

      // yaha response ke structure ke hisaab se access karna
      const botreply = result?.choices?.[0]?.message?.content || "No reply";

      const botMessage = {
        id: Date.now(),
        text: botreply,
        sender: values?.aka || "bot",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching:", error);
    }
  };

  const submit = () => {
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      datafetch();
    }, 500);

    setInput("");
  };

  return (
    <>
      {/* Top bar */}
      <div className="grid justify-center">
        <h1 className="text-3xl font-bold mt-4">{values?.aka}</h1>
        <p className="mt-2 text-xl m-auto">{values?.tagline}</p>
        {values?.image && (
          <img
            src={values.image}
            alt="profile"
            className="h-[130px] rounded-2xl mt-3 m-auto hover:border"
          />
        )}
      </div>

      {/* output screen */}
      <div className="border-amber-300 sm:w-[60%] mx-auto h-auto mb-20 mt-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex mt-4 ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-xs text-xl break-words ${
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

      {/* chat input */}
      <div className="fixed bottom-2 w-full border-amber-300 flex gap-5 justify-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          placeholder="Ask Anything"
          className="border w-[59%] text-xl p-3 h-14 rounded-xl bg-black text-white focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={submit}
          className="sm:w-[10%] h-14 text-xl bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Bot;

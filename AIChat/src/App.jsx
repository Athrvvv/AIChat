import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const generateAnswer = async () => {
    if (!userInput.trim()) return;

    const newChat = [...chat, { sender: "user", text: userInput }];
    setChat(newChat);
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:3001/generate", {
        userInput,
      });

      const geminiResponse = response.data.text || "No response received.";

      setChat([
        ...newChat,
        { sender: "bot", text: geminiResponse },
      ]);
    } catch (err) {
      console.error(err);
      setChat([
        ...newChat,
        { sender: "bot", text: "Error generating response." },
      ]);
    }

    setUserInput("");
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 font-sans">
      <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-4 text-gray-800">Gemini Chatbot</h1>

      <div className="flex flex-col gap-2 border rounded-lg p-4 h-[60vh] sm:h-[70vh] overflow-y-auto bg-gray-50 shadow-sm mb-4">
        {chat.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm sm:text-base ${
              msg.sender === "user"
                ? "bg-green-100 self-end text-right"
                : "bg-red-100 self-start text-left"
            }`}
          >
            <strong>{msg.sender === "user" ? "You" : "Gemini"}:</strong> {msg.text}
          </div>
        ))}
        {loading && <p className="text-sm text-gray-500">Thinking...</p>}
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && generateAnswer()}
          placeholder="Ask me anything..."
          className="flex-1 px-3 py-2 rounded-md border border-gray-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={generateAnswer}
          className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm sm:text-base hover:bg-blue-700 transition-all"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default App;

import React, { useState } from "react";

function Messages() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input) return;
    setMessages([...messages, { text: input, time: new Date().toLocaleTimeString() }]);
    setInput("");
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1>Messages 💬</h1>
      <div style={{ maxWidth: "500px", margin: "20px auto", background: "rgba(255,255,255,0.1)", padding: "20px", borderRadius: "15px", height: "400px", overflowY: "auto" }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ textAlign: "left", marginBottom: "10px" }}>
            <p>{msg.text}</p>
            <small>{msg.time}</small>
          </div>
        ))}
      </div>
      <div>
        <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Type a message..." style={{ padding:"10px", width:"300px" }} />
        <button onClick={sendMessage} style={{ padding:"10px", marginLeft:"10px", background:"#ff416c", color:"white", border:"none"}}>Send</button>
      </div>
    </div>
  );
}

export default Messages;

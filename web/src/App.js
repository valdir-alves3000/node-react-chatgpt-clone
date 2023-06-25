import "./styles/App.css";
import "./styles/reset.css";

import { makeRequest } from "./api/api";

import { useState } from "react";
import { ChatMessage } from "./components/ChatMessage/ChatMessage";
import { HideSideMenu } from "./components/HideSideMenu/HideSideMenu";
import { SideMenu } from "./components/SideMenu/SideMenu";

function App() {
  const [sideMenuActive, setSideMenuActive] = useState(true);
  const [input, setInput] = useState("");
  const [chatlog, setChatlog] = useState([
    { user: "gpt", message: "Como posso te ajudar hoje?" },
  ]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let response = await makeRequest({ prompt: input });
      response = response.data.split("\n").map((line) => <p>{line}</p>);

      setChatlog([
        ...chatlog,
        {
          user: "me",
          message: `${input}`,
        },
        {
          user: "gpt",
          message: response,
        },
      ]);
    } catch (error) {
      setChatlog([
        ...chatlog,
        {
          user: "me",
          message: `${input}`,
        },
        {
          user: "gpt",
          message: error.message,
        },
      ]);
    }

    setInput("");
  }
  function handleToggleSideMenu() {
    setSideMenuActive(!sideMenuActive);
  }

  return (
    <div className="App">
      {sideMenuActive && (
        <SideMenu
          handleToggleSideMenu={handleToggleSideMenu}
          sideMenuActive={sideMenuActive}
        />
      )}
      <section className="chatbox">
        {!sideMenuActive && (
          <HideSideMenu
            handleToggleSideMenu={handleToggleSideMenu}
            sideMenuActive={!sideMenuActive}
          />
        )}

        <div className="chat-log">
          {chatlog.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>

        <div className="chat-input-holder">
          <form onSubmit={handleSubmit}>
            <input
              rows="1"
              className="chat-input-textarea"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;

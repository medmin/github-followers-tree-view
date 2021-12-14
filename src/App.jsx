import React, { useState, useCallback } from "react";
import { Follower } from "./Follower";
import "./App.scss";

function App() {
  const [followers, setFollowers] = useState([]);

  const [username, setUsername] = useState("");

  const handleUsernameOnChange = useCallback((evt) => {
    evt.stopPropagation();
    evt.preventDefault();

    setUsername(evt.target.value);
  }, []);

  const handleOnEnter = useCallback(
    (evt) => {
      if (evt.key !== "Enter") {
        return;
      }
      fetch(`https://api.github.com/users/${username}/followers`)
        .then((res) => res.json())
        .then((data) => {
          setFollowers(data);
        });
    },
    [username]
  );

  return (
    <div className="App">
      <input
        autoFocus
        value={username}
        onChange={handleUsernameOnChange}
        onKeyUp={handleOnEnter}
      />
      <ul className="follower-container">
        {followers.map((follower) => {
          return (
            <Follower
              key={follower.id}
              curr={follower}
              onLoadMore={() => null}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;

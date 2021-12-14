import React from "react";

export const Load = ({ parent, followers, setFollowers }) => {
  const onClick = React.useCallback(async () => {
    if (followers === null) {
      const response = await fetch(
        `https://api.github.com/users/${parent.login}/following`
      );
      const json = await response.json();
      setFollowers(json);
    }
  }, [followers, parent.login, setFollowers]);

  return <button onClick={onClick}>Load</button>;
};

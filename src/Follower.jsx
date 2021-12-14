import React, { useState } from "react";
import PropTypes from "prop-types";
import { Load } from "./Load";

export const Follower = ({ curr }) => {
  const [followers, setFollowers] = useState(null);

  return (
    <li className="follower-item">
      <div>
        <span> {curr.login}</span>
        <Load parent={curr} followers={followers} setFollowers={setFollowers} />
      </div>

      {followers && (
        <ul className="follower-item-container">
          {followers.map((f) => {
            return <Follower key={f.id} curr={f} />;
          })}
        </ul>
      )}
    </li>
  );
};

Follower.prototype = {
  root: PropTypes.object,
  current: PropTypes.object,
  setFollowers: PropTypes.func,
};

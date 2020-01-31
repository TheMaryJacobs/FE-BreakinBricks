import React, { useEffect, useState } from "react";
import axios from "axios";
import { DIMENSIONS } from "../../utils/constants";
export default function HighScores() {
  const [highScores, setHighScores] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/high-scores")
      .then(res => setHighScores(res.data.highScores));
  }, []);
  return (
      <div
        style={{
          position: "absolute",
          top: "calc(100% + 50px)",
          width: DIMENSIONS.DEFAULT.WIDTH
        }}
      >
        <h1>High Scores</h1>
        <ol>
          {highScores.map(({ initials, score }) => (
            <li>
              {initials}: {score}
            </li>
          ))}
        </ol>
      </div>
  );
}
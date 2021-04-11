import { useState } from "react";

const COLORS = ["green", "blue", "yellow", "orange", "white", "red"];

export const CubeFace = () => {
  const [squareColors, setSquareColor] = useState(
    Array.from(Array(9).keys()).map(() => COLORS[Math.floor(Math.random() * 6)])
  );
  const [gameState, setGameState] = useState(0);

  return (
    <>
      {gameState === 1 && (
        <div>
          Congratulations!{" "}
          <button
            type="button"
            onClick={() => {
              setGameState(0);
              setSquareColor(
                Array.from(Array(9).keys()).map(
                  () => COLORS[Math.floor(Math.random() * 6)]
                )
              );
            }}
          >
            Restart
          </button>
        </div>
      )}
      <div
        style={{
          width: "610px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridGap: "5px",
        }}
      >
        {squareColors.map((c, k) => (
          <div
            key={`c${k}`}
            onClick={() => {
              squareColors[k] = COLORS[(COLORS.indexOf(c) + 1) % 6];
              setSquareColor([...squareColors]);
              if (squareColors.every((val) => val === squareColors[0])) {
                setGameState(1);
              }
            }}
            style={{ backgroundColor: c, width: "200px", height: "200px" }}
          />
        ))}
      </div>
    </>
  );
};

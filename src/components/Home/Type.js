import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Frontend Blockchain Developer",
          "React and Next.js Developer",
          "Web3 UI Engineer",
          "TypeScript Frontend Engineer",
          "Responsive Interface Builder",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

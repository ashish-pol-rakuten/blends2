import React from "react";
import "./StaggerText.css";

export const StaggerText = ({ text, className }) => {
  let charCounter = 0;
  let delay = 0;
  function sumCharactersInStrings(arrayOfStrings) {
    return arrayOfStrings.reduce((sum, string) => sum + string.length, 0);
  }
  const total = sumCharactersInStrings(text) * 2 * 300;
  return (
    <div className={`${className} flex flex-col`}>
      {text.map((word, wordIndex) => (
        <div key={wordIndex} className="flex gap-1">
          {word.split("").map((char, charIndex) => {
            if (char !== " ") charCounter++;
            delay = charCounter * 300;
            let cName = "animated-slidein text-black";
            const isLast = wordIndex === text.length - 1 && text.length > 1;
            if (isLast) {
              cName = cName + " " + "text-brand";
            }
            return (
              <span
                key={charCounter}
                className={cName}
                style={{
                  "--startdelay": `${delay}ms`,
                  "--total": `${total}ms`,
                }}
              >
                {char}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
};

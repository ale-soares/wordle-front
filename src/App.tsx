import { useState } from "react";

import GridItem from "./components/GridItem";
import KeyboardButton from "./components/KeyboardButton";

import { keys } from "./mocks/Keyboard";

const App = () => {
  const [targetWord, setTargetWord] = useState("frizz");
  const [guess, setGuess] = useState<string[]>([]);
  const [confirmedGuess, setConfirmedGuess] = useState<string[]>([]);

  // useEffect(() => {
  //   fetch("https://wordle-api-lemon.vercel.app/word")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setTargetWord(data);
  //     });
  // }, []);

  const handleCharSelect = (char: string) => {
    setGuess([...guess, char]);
  };

  const handleDelete = () => {
    console.log("delete");
  };

  const handleConfirm = () => {
    setConfirmedGuess(guess);
    setGuess([]);
  };

  console.log(guess);

  return (
    <>
      <h1 className="text-theme-light-gray text-2xl">{targetWord}</h1>
      <div className="flex">
        {Array.from(targetWord).map((_, index) => (
          <GridItem char={guess[index]} />
        ))}
      </div>
      {keys.map((char) => (
        <KeyboardButton
          disabled={guess.length >= targetWord.length}
          char={char}
          onClick={() => handleCharSelect(char)}
        />
      ))}
      <button
        onClick={handleDelete}
        className="text-theme-light-gray text-2xl border"
      >
        delete
      </button>
      <button
        onClick={handleConfirm}
        className="text-theme-light-gray text-2xl border"
      >
        enter
      </button>
    </>
  );
};

export default App;

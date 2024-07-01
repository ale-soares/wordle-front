import { useState } from "react";

// import GridItem from "./components/GridItem";
import WordGrid from "./sections/WordGrid";
import KeyboardButton from "./components/KeyboardButton";

import Navbar from "./sections/Navbar";
import Difficulty from "./sections/Difficulty";

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

  // console.log(guess);

  return (
    <>
      <Navbar />
      <div className="mt-8 lg:px-80">
        <Difficulty />
        <WordGrid targetWord={targetWord} guess={guess} />
        <div className="flex justify-center">
          {keys.map((char) => (
            <KeyboardButton
              disabled={guess.length >= targetWord.length}
              char={char}
              onClick={() => handleCharSelect(char)}
            />
          ))}
          <button onClick={handleDelete} className="text-body border">
            delete
          </button>
          <button onClick={handleConfirm} className="text-body border">
            enter
          </button>
        </div>
      </div>
    </>
  );
};

export default App;

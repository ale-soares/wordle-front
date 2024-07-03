import WordGrid from "./sections/WordGrid";
import KeyboardButton from "./components/KeyboardButton";

import Navbar from "./sections/Navbar";
import Difficulty from "./sections/Difficulty";

import { keys } from "./mocks/Keyboard";

import { useAppDispatch, useAppSelector } from "./hooks";
import { addChar, deleteChar } from "./features/guessSlice";

const App = () => {
  const targetWord = "fizz";

  const guess = useAppSelector((state) => state.guess);
  const dispatch = useAppDispatch();

  return (
    <>
      <Navbar />
      <div className="mt-8 lg:px-80">
        <Difficulty />
        <WordGrid targetWord={targetWord} guess={guess} />
        <div className="flex justify-center">
          {keys.map((char) => (
            <KeyboardButton
              disabled={guess.guess.length >= targetWord.length}
              char={char}
              onClick={() => dispatch(addChar(char))}
            />
          ))}
          <button
            onClick={() => dispatch(deleteChar())}
            className="text-body border"
          >
            delete
          </button>
          {/* <button
            onClick={() => dispatch(updateStatus())}
            className="text-body border"
          >
            enter
          </button> */}
        </div>
      </div>
    </>
  );
};

export default App;

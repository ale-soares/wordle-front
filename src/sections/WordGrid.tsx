import { useAppSelector, useAppDispatch } from "./../hooks";

import { increment } from "../features/guessSlice";

import GridItem from "../components/GridItem";

interface WordGridProps {
  targetWord: string;
  guess: string[];
}

const WordGrid: React.FC<WordGridProps> = ({ targetWord, guess }) => {
  const count = useAppSelector((state) => state.guess.counter);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="flex justify-center">
        {Array.from(targetWord).map((_, index) => (
          <GridItem char={guess[index]} />
        ))}
      </div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
    </div>
  );
};

export default WordGrid;

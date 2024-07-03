import { useAppSelector, useAppDispatch } from "./../hooks";

import { increment } from "../features/counterSlice";

import GridItem from "../components/GridItem";

import type { Guess } from "../types/Guess";

interface WordGridProps {
  targetWord: string;
  guess: Guess;
}

const WordGrid: React.FC<WordGridProps> = ({ targetWord, guess }) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="flex justify-center">
        {Array.from(targetWord).map((_, index) => (
          <GridItem char={guess.guess.find((g) => g.id === index)} />
        ))}
      </div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
    </div>
  );
};

export default WordGrid;

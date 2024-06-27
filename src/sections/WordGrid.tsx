import GridItem from "../components/GridItem";

interface WordGridProps {
  targetWord: string;
  guess: string[];
}

const WordGrid: React.FC<WordGridProps> = ({ targetWord, guess }) => {
  return (
    <div>
      <div className="flex">
        {Array.from(targetWord).map((_, index) => (
          <GridItem char={guess[index]} />
        ))}
      </div>
    </div>
  );
};

export default WordGrid;

import type { Char } from "../types/Guess";

interface GridItemProps {
  char?: Char;
}

const GridItem: React.FC<GridItemProps> = ({ char }) => {
  return (
    <div className="text-center border-2 border-theme-light-gray w-20 h-20">
      <span className="leading-extra-snug p-0 text-6xl">
        {char && char.value.toUpperCase()}
      </span>
    </div>
  );
};

export default GridItem;

import { useState } from "react";

import { difficulties } from "../mocks/Difficulty";

const Difficulty = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState("medium");

  const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDifficulty(e.target.value);
  };

  const getDifficultyDetails = () => {
    const difficulty = difficulties.filter(
      (diff) => diff.name === selectedDifficulty
    );
    return difficulty[0];
  };

  return (
    <div className="text-center">
      <h1 className="text-section">difficulty</h1>
      <select
        className="text-theme-dark-gray mb-4"
        onChange={(e) => handleDifficultyChange(e)}
        name="difficulty-select"
      >
        {difficulties.map((diff) => (
          <option value={diff.name}>{diff.name}</option>
        ))}
      </select>
      <p className="text-detail">
        word length: {getDifficultyDetails().size} characters
      </p>
      <p className="text-detail mb-16">
        attempts: {getDifficultyDetails().attempts}
      </p>
    </div>
  );
};

export default Difficulty;

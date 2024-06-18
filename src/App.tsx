import GridItem from "./components/GridItem";
import KeyboardButton from "./components/KeyboardButton";

const App = () => {
  return (
    <>
      <h1>Wordle App</h1>
      <div className="flex">
        <GridItem char="a" />
        <GridItem char="" />
        <GridItem char="" />
        <GridItem char="" />
      </div>
      <KeyboardButton char="a" />
      <KeyboardButton char="b" />
      <KeyboardButton char="c" />
    </>
  );
};

export default App;

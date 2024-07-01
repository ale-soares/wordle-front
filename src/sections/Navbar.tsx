const Navbar = () => {
  return (
    <div className="bg-theme-black">
      <div className="lg:px-40 py-2 text-section flex justify-between">
        <div className="flex">
          <img src="/src/assets/logo.svg" alt="logo" className="w-10 mr-2" />
          <h1>wordle clone</h1>
        </div>
        <h1>how to play</h1>
      </div>
    </div>
  );
};

export default Navbar;

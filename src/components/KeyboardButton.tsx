interface KeyboardButtonProps {
  char?: string;
}

const KeyboardButton: React.FC<KeyboardButtonProps> = ({ char }) => {
  return (
    <button className="text-theme-light-gray text-2xl p-3 border">
      {char}
    </button>
  );
};

export default KeyboardButton;

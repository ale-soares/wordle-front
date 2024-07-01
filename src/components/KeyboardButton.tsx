interface KeyboardButtonProps {
  char?: string;
  onClick: () => void;
  disabled?: boolean;
}

const KeyboardButton: React.FC<KeyboardButtonProps> = ({
  char,
  onClick,
  disabled,
}) => {
  return (
    <button
      className="text-body p-3 border min-w-12"
      onClick={onClick}
      disabled={disabled}
    >
      {char}
    </button>
  );
};

export default KeyboardButton;

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
      className="text-theme-light-gray text-body p-3 border"
      onClick={onClick}
      disabled={disabled}
    >
      {char}
    </button>
  );
};

export default KeyboardButton;

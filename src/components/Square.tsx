interface ISquareProps {
  onClick: () => void;
  value: "X" | "O" | null;
  winner: string | null
}

const Square: React.FC<ISquareProps> = ({ onClick, value,winner }) => {
  if (!value) {
    return (
      <button className="button" onClick={onClick} disabled={Boolean(winner)} >
        
      </button>
    );
  }
  return (
    <button className={`button button_${value}`}
    disabled
    >
      {value}
    </button>
  );
};

export default Square;

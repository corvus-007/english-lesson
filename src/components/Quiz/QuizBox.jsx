const QuizBox = ({ children, ratio = 1 }) => {
  return (
    <div className="quizBox" style={{ aspectRatio: ratio }}>
      {children}
    </div>
  );
};

export default QuizBox;

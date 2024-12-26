function QuizExtraInfo({ text, caption }) {
  return (
    <aside className="quizExtraInfo">
      <p className="quizHint__caption">{caption}</p>
      {text}
    </aside>
  );
}

export default QuizExtraInfo;

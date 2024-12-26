function QuizAnswers({ answers }) {
  return (
    <ul className="quizAnswers">
      { answers.map((answer, index) => (<li key={ index }>{ answer }</li>)) }
    </ul>
  );
}

export default QuizAnswers;

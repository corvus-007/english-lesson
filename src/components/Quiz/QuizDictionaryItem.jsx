function QuizDictionaryItem({ item }) {
  const [term, definition] = item;

  return (
    <div className="quizDictionaryItem">
      <dt>{ term }</dt>
      <dd>{ definition }</dd>
    </div>
  );
}

export default QuizDictionaryItem;

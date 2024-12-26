import QuizDictionaryItem from './QuizDictionaryItem.jsx';

function QuizDictionary({ items }) {
  return (
    <dl className="quizDictionary">
      { items.map((item, index) => <QuizDictionaryItem key={ index } item={ item } />) }
    </dl>
  );
}

export default QuizDictionary;

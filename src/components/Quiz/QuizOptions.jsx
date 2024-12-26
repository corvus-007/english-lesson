import { shuffle } from 'lodash';

function QuizOptions({ options }) {
  return (
    <ol className="quizOptions" type="a">
      { shuffle(options).map((option, index) => (<li key={ index }>
        { option }</li>)) }
    </ol>
  );
}

export default QuizOptions;

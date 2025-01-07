import { shuffle } from 'lodash';

function QuizOptions({ options, className }) {
  return (
    <ol className={`quizOptions ${className}`} type="a">
      { shuffle(options).map((option, index) => (<li key={ index }>
        { option }</li>)) }
    </ol>
  );
}

export default QuizOptions;

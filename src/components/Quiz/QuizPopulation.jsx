import QuizOptions from './QuizOptions.jsx';
import QuizAnswers from './QuizAnswers.jsx';
import QuizBoxItem from './QuizBoxItem.jsx';
import QuizBox from './QuizBox.jsx';

function QuizPopulation({ populationQuestion }) {
  const { options, answers } = populationQuestion;

  return (
    <QuizBox>
      <QuizBoxItem>
        <QuizOptions options={ options } />
      </QuizBoxItem>
      <QuizBoxItem>
        <QuizAnswers answers={ answers } />
      </QuizBoxItem>
    </QuizBox>
  );
}

export default QuizPopulation;

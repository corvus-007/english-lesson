import QuizOptions from './QuizOptions.jsx';
import QuizAnswers from './QuizAnswers.jsx';
import QuizBoxItem from './QuizBoxItem.jsx';
import QuizBox from './QuizBox.jsx';
import CaptionBox from '../UI/CaptionBox.jsx';

function QuizPopulation({ populationQuestion }) {
  const { options, answers } = populationQuestion;

  return (
    <QuizBox ratio={2/1.4}>
      <QuizBoxItem>
        <CaptionBox caption="Population">
          <QuizOptions className="contentCenter" options={options}/>
        </CaptionBox>
      </QuizBoxItem>
      <QuizBoxItem>
        <QuizAnswers answers={ answers } />
      </QuizBoxItem>
    </QuizBox>
  );
}

export default QuizPopulation;

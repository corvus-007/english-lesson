import QuizFlagOptions from './QuizFlagOptions.jsx';
import QuizFlagAnswers from './QuizFlagAnswers.jsx';
import QuizBoxItem from './QuizBoxItem.jsx';
import QuizBox from './QuizBox.jsx';
import CaptionBox from '../UI/CaptionBox.jsx';

function QuizFlag({ flagQuestion }) {
  const { options, answers } = flagQuestion;
  const flagSizes = {
    width: '2cm',
    height: 'auto',
    aspect: '200 / 150',
  };

  return (
    <QuizBox ratio={1/1}>
      <QuizBoxItem>
        <CaptionBox caption="Flag">
          <QuizFlagOptions className="contentCenter" options={options} flagSizes={flagSizes}/>
        </CaptionBox>
      </QuizBoxItem>
      <QuizBoxItem>
        <QuizFlagAnswers answers={ answers } flagSizes={ flagSizes } />
      </QuizBoxItem>
    </QuizBox>
  );
}

export default QuizFlag;

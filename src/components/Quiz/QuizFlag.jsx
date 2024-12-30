import QuizFlagOptions from './QuizFlagOptions.jsx';
import QuizFlagAnswers from './QuizFlagAnswers.jsx';
import QuizBoxItem from './QuizBoxItem.jsx';
import QuizBox from './QuizBox.jsx';

function QuizFlag({ flagQuestion }) {
  const { options, answers } = flagQuestion;
  const flagSizes = {
    width: '2cm',
    height: 'auto',
    aspect: '200 / 150',
  };

  return (
    <QuizBox>
      <QuizBoxItem>
        <QuizFlagOptions options={ options } flagSizes={ flagSizes } />
      </QuizBoxItem>
      <QuizBoxItem>
        <QuizFlagAnswers answers={ answers } flagSizes={ flagSizes } />
      </QuizBoxItem>
    </QuizBox>
  );
}

export default QuizFlag;

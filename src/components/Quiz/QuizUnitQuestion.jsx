import QuizQuestion from './QuizQuestion.jsx';
import QuizOptions from './QuizOptions.jsx';
import QuizAnswers from './QuizAnswers.jsx';
import QuizExtraInfo from './QuizExtraInfo.jsx';
import QuizBox from './QuizBox.jsx';
import QuizBoxItem from './QuizBoxItem.jsx';

function QuizUnitQuestion({ question }) {
  return (
    <div className="quizItem">
      <QuizBox ratio={1/1.1}>
        <QuizBoxItem>
          <QuizQuestion text={ question.text } />
          <QuizOptions options={ question.options } />
        </QuizBoxItem>
        <QuizBoxItem>
          <QuizAnswers answers={ question.answers } />
          <QuizExtraInfo
            text={ question.explanation }
          />
        </QuizBoxItem>
      </QuizBox>
    </div>
  );
}

export default QuizUnitQuestion;

import QuizQuestion from './QuizQuestion.jsx';
import QuizOptions from './QuizOptions.jsx';
import QuizAnswers from './QuizAnswers.jsx';
import QuizExtraInfo from './QuizExtraInfo.jsx';
import QuizBox from './QuizBox.jsx';
import QuizBoxItem from './QuizBoxItem.jsx';

function QuizUnitQuestion({ question }) {
  return (
    <div className="quizItem">
      <QuizBox>
        <QuizBoxItem>
          <QuizQuestion text={ question.text } />
          <QuizOptions options={ question.options } />
        </QuizBoxItem>
        <QuizBoxItem>
          <QuizAnswers answers={ question.answers } />
          <QuizExtraInfo
            caption="Explanation"
            text={ question.explanation }
          />
        </QuizBoxItem>
      </QuizBox>
    </div>
  );
}

export default QuizUnitQuestion;

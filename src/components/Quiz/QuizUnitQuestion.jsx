import QuizQuestion from './QuizQuestion.jsx';
import QuizOptions from './QuizOptions.jsx';
import QuizAnswers from './QuizAnswers.jsx';
import QuizExplanation from './QuizExplanation.jsx';
import QuizExtraInfo from './QuizExtraInfo.jsx';

function QuizUnitQuestion({ question }) {
  return (
    <div className="quizItem">
      <div className="quizItem__level">
        <QuizQuestion text={ question.text } />
        <QuizOptions options={ question.options } />
        <QuizAnswers answers={ question.answers } />
        <QuizExtraInfo
          caption="Explanation"
          text={question.explanation}
        />
      </div>
    </div>
  );
}

export default QuizUnitQuestion;

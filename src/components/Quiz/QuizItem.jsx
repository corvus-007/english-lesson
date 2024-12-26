import QuizQuestion from './QuizQuestion.jsx';
import QuizHint from './QuizHint.jsx';
import QuizDictionary from './QuizDictionary.jsx';
import QuizOptions from './QuizOptions.jsx';
import QuizAnswers from './QuizAnswers.jsx';
import QuizPopulation from './QuizPopulation.jsx';
import QuizFlag from './QuizFlag.jsx';

function QuizItem({ question }) {
  const { mainQuestion, subquestions } = question;

  return (
    <div className="quizItem">
      <div className="quizItem__level">
        <QuizQuestion text={ mainQuestion.text } />
        <QuizHint text={ mainQuestion.hint } />
        { mainQuestion.vocabulary.length > 0 && <QuizDictionary items={ mainQuestion.vocabulary } /> }
        <QuizOptions options={ mainQuestion.options } />
        <QuizAnswers answers={ mainQuestion.answers } />
      </div>
      <div className="quizItem__level">
        <QuizPopulation populationQuestion={subquestions.population} />
      </div>
      <div className="quizItem__level">
        <QuizFlag flagQuestion={subquestions.flag}></QuizFlag>
      </div>
    </div>
  );
}

export default QuizItem;

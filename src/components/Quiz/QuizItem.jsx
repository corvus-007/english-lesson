import QuizQuestion from './QuizQuestion.jsx';
import QuizExtraInfo from './QuizExtraInfo.jsx';
import QuizDictionary from './QuizDictionary.jsx';
import QuizOptions from './QuizOptions.jsx';
import QuizAnswers from './QuizAnswers.jsx';
import QuizPopulation from './QuizPopulation.jsx';
import QuizFlag from './QuizFlag.jsx';
import QuizBox from './QuizBox.jsx';
import QuizBoxItem from './QuizBoxItem.jsx';

function QuizItem({ question }) {
  const { mainQuestion, subquestions } = question;

  return (
    <div className="quizItem">
      <QuizBox>
        <QuizBoxItem>
          <div>
            <QuizQuestion text={ mainQuestion.text } />
            <QuizExtraInfo
              caption="Hint"
              text={ mainQuestion.hint }
            />
            { mainQuestion.vocabulary.length > 0 && <QuizDictionary items={ mainQuestion.vocabulary } /> }
          </div>
          <QuizOptions options={ mainQuestion.options } />
        </QuizBoxItem>
        <QuizBoxItem>
          <QuizAnswers answers={ mainQuestion.answers } />
        </QuizBoxItem>
      </QuizBox>
      <QuizPopulation populationQuestion={ subquestions.population } />
      <QuizFlag flagQuestion={ subquestions.flag }></QuizFlag>
    </div>
  );
}

export default QuizItem;

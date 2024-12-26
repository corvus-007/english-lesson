import QuizFlagOptions from './QuizFlagOptions.jsx';
import QuizFlagAnswers from './QuizFlagAnswers.jsx';

function QuizFlag ({ flagQuestion }) {
  const {options, answers} = flagQuestion;
  const flagSizes = {
    width: '2cm',
    height: 'auto',
    aspect: '200 / 150',
  }

  return (
    <section className="quizSubquestion">
      <h2 className="quizSubquestion__title">Flag</h2>
      <QuizFlagOptions options={options} flagSizes={flagSizes} />
      <QuizFlagAnswers answers={answers} flagSizes={flagSizes} />
    </section>
  )
}

export default QuizFlag;

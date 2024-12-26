import QuizOptions from './QuizOptions.jsx';
import QuizAnswers from './QuizAnswers.jsx';

function QuizPopulation({ populationQuestion }) {
  const { options, answers } = populationQuestion;

  return (
    <section className='quizSubquestion'>
      <h2 className="quizSubquestion__title">Population</h2>
      <QuizOptions options={ options } />
      <QuizAnswers answers={ answers } />
    </section>
  );
}

export default QuizPopulation;

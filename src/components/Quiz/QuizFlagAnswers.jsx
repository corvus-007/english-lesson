import ReactCountryFlag from 'react-country-flag';

function QuizFlagAnswers({ answers, flagSizes }) {
  return (
    <ul className="quizAnswers">
      { answers.map((answer, index) => (<li key={ index }>
        <ReactCountryFlag
          className="flagIcon"
          countryCode={ answer }
          style={ flagSizes }
          svg
        />
      </li>)) }
    </ul>
  );
}

export default QuizFlagAnswers;

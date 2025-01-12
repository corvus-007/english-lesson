import ReactCountryFlag from 'react-country-flag';
import { shuffle } from 'lodash';

function QuizFlagOptions({ options, flagSizes, className }) {
  return (
    <ol className={`quizOptions ${className}`} type="a">
      { shuffle(options).map((option, index) => (
        <li key={ index }>
          <ReactCountryFlag
            className="flagIcon"
            countryCode={ option }
            style={ flagSizes  }
            svg
          />
        </li>)) }
    </ol>
  );
}

export default QuizFlagOptions;

import './App.css';
import './components/Quiz/Quiz.css'
import { questions } from './assets/questions.js';
import QuizItem from './components/Quiz/QuizItem.jsx';
import { unitsQuestions } from './assets/units-questions.js';
import QuizUnitQuestion from './components/Quiz/QuizUnitQuestion.jsx';

console.log(questions);
console.log(unitsQuestions);
function App() {
  return (
    <div>
      <div className="quizContainer">
        { questions.map((question, index) => (<QuizItem key={ 'countryQ' + index } question={ question } />)) }
      </div>
      <div className="quizContainer">
        { unitsQuestions.map((question, index) => (<QuizUnitQuestion key={ 'unitQ' + index } question={ question } />)) }
      </div>
    </div>
  );
}

export default App;

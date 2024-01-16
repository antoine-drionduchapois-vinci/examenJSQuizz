import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';
import questions from './utils/questions';

const HomePage = () => {
    const main = document.querySelector('main');
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    window.replay = function() {
        HomePage();
    }
   

    const question1 = getRandomInt(0, 30);
    const question2 = getRandomInt(0, 30);
    const question3 = getRandomInt(0, 30);

const bloc1 =  `
    <div class="question1">
        <h1>${questions[question1].question}</h1>
        
        <input type="radio" name="answer1" value="0" id="answer0" required>
        <label for="answer0${question1}">${questions[question1].answers[0].text}</label><br>
        
        <input type="radio" name="answer1" value="1" id="answer1" required>
        <label for="answer1${question1}">${questions[question1].answers[1].text}</label><br>
        
        <input type="radio" name="answer1" value="2" id="answer2" required>
        <label for="answer2${question1}">${questions[question1].answers[2].text}</label><br>
    </div>
    <div class="question2">
    <h1>${questions[question2].question}</h1>
    
    <input type="radio" name="answer2" value="0" id="answer0_2" required>
    <label for="answer0_2">${questions[question2].answers[0].text}</label><br>
    
    <input type="radio" name="answer2" value="1" id="answer1_2" required>
    <label for="answer1_2">${questions[question2].answers[1].text}</label><br>
    
    <input type="radio" name="answer2" value="2" id="answer2_2" required>
    <label for="answer2_2">${questions[question2].answers[2].text}</label><br>
</div>

<div class="question3">
    <h1>${questions[question3].question}</h1>
    
    <input type="radio" name="answer3" value="0" id="answer0_3" required>
    <label for="answer0_3">${questions[question3].answers[0].text}</label><br>
    
    <input type="radio" name="answer3" value="1" id="answer1_3" required>
    <label for="answer1_3">${questions[question3].answers[1].text}</label><br>
    
    <input type="radio" name="answer3" value="2" id="answer2_3" required>
    <label for="answer2_3">${questions[question3].answers[2].text}</label><br>
</div>

    

    <button onclick="getResult()">Resultat</button>
`;

window.getResult = function() {
    const selectedRadioButton1 = document.querySelector('input[name="answer1"]:checked');
    const selectedRadioButton2 = document.querySelector('input[name="answer2"]:checked');
    const selectedRadioButton3 = document.querySelector('input[name="answer3"]:checked');

    if (!selectedRadioButton1 || !selectedRadioButton2 || !selectedRadioButton3) {
        alert("Please answer all questions before submitting.");
        return;
    }

    const selectedValue1 = selectedRadioButton1.value;
    const selectedValue2 = selectedRadioButton2.value;
    const selectedValue3 = selectedRadioButton3.value;

    let result = 0;

    if (questions[question1].answers[selectedValue1].isCorrect) {
        result += 1;
    }

    if (questions[question2].answers[selectedValue2].isCorrect) {
        result += 1;
    }

    if (questions[question3].answers[selectedValue3].isCorrect) {
        result += 1;
    }

    console.log(result);
      const  bloc2 = `<p>${result}/3</p>
      <button onclick="replay()">Play again</button>`
       main.innerHTML = bloc2;

};




main.innerHTML = bloc1;

}


  HomePage();


  export default HomePage;
  
  

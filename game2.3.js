const App = {
      data() {
                return {
                    words: [
                        { word: 'дом', answer: 'домик' },
                        { word: 'кот', answer: 'котик' },
                        { word: 'мама', answer: 'мамочка' },
                        { word: 'солнце', answer: 'солнышко' },
                        { word: 'цветок', answer: 'цветочек' },
                        { word: 'ложка', answer: 'ложечка' },
                        { word: 'мяч', answer: 'мячик' },
                        { word: 'заяц', answer: 'зайчик' }
                    ],
                    currentIndex: 0,
                    userAnswer: '',
                    isCorrect: false,
                    isIncorrect: false,
                    resultMessage: '',
                    showNextButton: false
                }
            },
            computed: {
                currentWord() {
                    return this.words[this.currentIndex].word;
                },
                correctAnswer() {
                    return this.words[this.currentIndex].answer;
                }
            },
            methods: {
                checkAnswer() {
                    if (this.userAnswer.toLowerCase() === this.correctAnswer) {
                        this.isCorrect = true;
                        this.isIncorrect = false;
                        this.resultMessage = 'Правильно! Молодец!';
                    } else {
                        this.isCorrect = false;
                        this.isIncorrect = true;
                        this.resultMessage = `Почти правильно! Верный ответ: ${this.correctAnswer}`;
                    }
                    this.showNextButton = true;
                },
                nextWord() {
                    this.currentIndex = (this.currentIndex + 1) % this.words.length;
                    this.userAnswer = '';
                    this.isCorrect = false;
                    this.isIncorrect = false;
                    this.resultMessage = '';
                    this.showNextButton = false;
                }
            }
        }
const app = Vue.createApp(App);
app.mount('#app')



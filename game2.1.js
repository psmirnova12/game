const App = {
      data() {
        return {
          currentQuestion: 0,
          selectedItem: null,
          feedback: null,
          message: '',
          showNextButton: false,
          questions: [
            {
              correctIndex: 3,
              items: [
                { name: 'Яблоко', image: 'img/game-icons/яблоко.png' },
                { name: 'Груша', image: 'img/game-icons/груша.png' },
                { name: 'Банан', image: 'img/game-icons/банан.png' },
                { name: 'Морковь', image: 'img/game-icons/морковь.png' }
              ]
            },
            {
              correctIndex: 2,
              items: [
                { name: 'Собака', image: 'img/game-icons/собака.png' },
                { name: 'Кошка', image: 'img/game-icons/кот.png' },
                { name: 'Ромашка', image: 'img/game-icons/ромашка.png' },
                { name: 'Попугай', image: 'img/game-icons/попугай.png' }
              ]
            },
            {
              correctIndex: 0,
              items: [
                { name: 'Самолет', image: 'img/game-icons/самолет.png' },
                { name: 'Автобус', image: 'img/game-icons/автобус.png' },
                { name: 'Машина', image: 'img/game-icons/машина.png' },
                { name: 'Велосипед', image: 'img/game-icons/велосипед.png' }
              ]
            },
            {
              correctIndex: 1,
              items: [
                { name: 'Футболка', image: 'img/game-icons/футболка.png' },
                { name: 'Чашка', image: 'img/game-icons/чашка.png' },
                { name: 'Штаны', image: 'img/game-icons/штаны.png' },
                { name: 'Шапка', image: 'img/game-icons/шапка.png' }
              ]
            }
          ]
        }
      },
      methods: {
        selectItem(index) {
          if (this.feedback !== null) return;
          
          this.selectedItem = index;
          if (index === this.questions[this.currentQuestion].correctIndex) {
            this.feedback = 'correct';
            this.message = 'Молодец! Правильно!';
          } else {
            this.feedback = 'incorrect';
            this.message = 'Попробуй ещё раз!';
          }
          this.showNextButton = true;
        },
        nextQuestion() {
          if (this.currentQuestion < this.questions.length - 1) {
            this.currentQuestion++;
          } else {
            this.currentQuestion = 0;
          }
          this.resetQuestion();
        },
        resetQuestion() {
          this.selectedItem = null;
          this.feedback = null;
          this.message = '';
          this.showNextButton = false;
        }
      }
    }
const app = Vue.createApp(App);
app.mount('#app')


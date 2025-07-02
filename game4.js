const App = {
      data() {
        return {
          seasons: [
            { id: 1, name: 'Зима', image: 'img/зима.jpg' },
            { id: 2, name: 'Весна', image: 'img/весна.jpg' },
            { id: 3, name: 'Лето', image: 'img/лето.jpg' },
            { id: 4, name: 'Осень', image: 'img/осень.jpg' }
          ],
          currentSeason: {},
          message: '',
          feedback: ''
        }
      },
      created() {
        this.getRandomSeason();
      },
      methods: {
        getRandomSeason() {
          const randomIndex = Math.floor(Math.random() * this.seasons.length);
          this.currentSeason = this.seasons[randomIndex];
          this.message = 'Какое это время года?';
          this.feedback = '';
        },
        checkAnswer(seasonId) {
          if (seasonId === this.currentSeason.id) {
            this.message = 'Правильно! Молодец!';
            this.feedback = 'correct';
            setTimeout(() => this.getRandomSeason(), 1500);
          } else {
            this.message = 'Попробуй еще раз!';
            this.feedback = 'incorrect';
          }
        },
        goBack() {
          window.location.href = 'index.html';
        }
      }
    }
const app = Vue.createApp(App);
app.mount('#app')


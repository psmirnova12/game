const App = {
      data() {
        return {
          preschoolGames: [
            { id: 1, title: 'Учим цвета', image: './img/игра1.png' },
            { id: 2, title: 'Собери фигуры', image: 'img/play2.png' },
            { id: 3, title: 'Найди пару', image: 'img/play3.png' },
            { id: 4, title: 'Времена года', image: 'img/обл.jpg' }
          ]
        }
      },
      methods: {
        startGame(gameId) {
          window.location.href = `game${gameId}.html`
          // Здесь будет переход на конкретную игру
        }
      }
    }
const app = Vue.createApp(App);
app.mount('#app')


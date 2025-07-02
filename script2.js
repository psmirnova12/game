const App = {
      data() {
        return {
          olderKidsGames: [
            { 
              id: 1, 
              title: 'Четвертый лишний', 
              image: 'img/игра2.1.jpg',
              description: 'Развивает логическое мышление'
            },
            { 
              id: 2, 
              title: 'Посчитай и кликни', 
              image: 'img/игра2.2.png', 
              description: 'Учимся считать'
            },
            { 
              id: 3, 
              title: 'Назови слово ласково', 
              image: 'img/игра2.3.jpg', 
              description: 'Расширяем словарный запас'
            },
            { 
              id: 4, 
              title: 'Чего нет?', 
              image: 'img/игра2.4.jpg', 
              description: 'Развиваем память'
            }
          ]
        }
      },
      methods: {
        startGame(gameId) {
          window.location.href = `game2.${gameId}.html`
        }
      }
    }
const app = Vue.createApp(App);
app.mount('#app')
const App = {
      data() {
        return {
          cards: [],
          moves: 0,
          matchedPairs: 0,
          flippedCards: [],
          canFlip: true,
          cardImages: [
            'банан', 'дерево', 'дом', 'звезда',
            'кот', 'морковь', 'собака', 'яблоко'
          ]
        }
      },
      created() {
        this.initGame();
      },
      methods: {
        goBack() {
          window.location.href = 'index.html';
        },
        initGame() {
          let cards = [];
          
          this.cardImages.forEach(image => {
            cards.push({ 
              type: image,
              image: `img/game-icons/${image}.png`, 
              flipped: false, 
              matched: false 
            });
            cards.push({ 
              type: image, 
              image: `img/game-icons/${image}.png`, 
              flipped: false, 
              matched: false 
            });
          });
          
          this.cards = this.shuffleArray(cards);
          this.moves = 0;
          this.matchedPairs = 0;
          this.flippedCards = [];
          this.canFlip = true;
        },
        
        shuffleArray(array) {
          const newArray = [...array];
          for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
          }
          return newArray;
        },
        
        flipCard(index) {
          if (!this.canFlip || this.cards[index].flipped || this.cards[index].matched) return;
          
          this.cards[index].flipped = true;
          
          if (this.flippedCards.length === 0) {
            this.flippedCards.push(index);
            return;
          }
          
          this.moves++;
          this.flippedCards.push(index);
          
          const card1 = this.cards[this.flippedCards[0]];
          const card2 = this.cards[this.flippedCards[1]];
          
          if (card1.type === card2.type) {
            card1.matched = true;
            card2.matched = true;
            this.flippedCards = [];
            this.matchedPairs++;
            
            if (this.matchedPairs === 8) {
              setTimeout(() => {
                alert(`Молодец! Ты нашёл все пары за ${this.moves} ходов!`);
              }, 500);
            }
          } else {
            this.canFlip = false;
            setTimeout(() => {
              card1.flipped = false;
              card2.flipped = false;
              this.flippedCards = [];
              this.canFlip = true;
            }, 1000);
          }
        }
      }
    }
const app = Vue.createApp(App);
app.mount('#app')


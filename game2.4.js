const App = {
      data() {
                return {
                    gameStarted: false,
                    showResult: false,
                    answerCorrect: false,
                    currentRound: 0,
                    removedItem: '',
                    rounds: [
                        {
                            items: ['🐶', '🐱', '🐭', '🐹'],
                            options: ['🐶', '🐱', '🐭', '🐹']
                        },
                        {
                            items: ['🍎', '🍐', '🍊', '🍋'],
                            options: ['🍎', '🍐', '🍊', '🍋']
                        },
                        {
                            items: ['🚗', '🚕', '🚙', '🚌'],
                            options: ['🚗', '🚕', '🚙', '🚌']
                        }
                    ]
                }
            },
            computed: {
                currentItems() {
                    if (!this.gameStarted) {
                        return this.rounds[this.currentRound].items;
                    } else {
                        const items = [...this.rounds[this.currentRound].items];
                        const randomIndex = Math.floor(Math.random() * items.length);
                        this.removedItem = items[randomIndex];
                        items.splice(randomIndex, 1);
                        return items;
                    }
                },
                options() {
                    // Берем правильный ответ и 2 случайных других варианта
                    const allOptions = [...this.rounds[this.currentRound].options];
                    const correctOption = this.removedItem;

                    // Фильтруем все варианты, кроме правильного
                    const otherOptions = allOptions.filter(opt => opt !== correctOption);

                    // Выбираем 2 случайных неправильных варианта
                    const shuffledOthers = [...otherOptions].sort(() => 0.5 - Math.random());
                    const wrongOptions = shuffledOthers.slice(0, 2);

                    // Объединяем правильный и неправильные варианты и перемешиваем
                    const finalOptions = [correctOption, ...wrongOptions];
                    return finalOptions.sort(() => 0.5 - Math.random());
                }
            },
            methods: {
                startGame() {
                    this.gameStarted = true;
                    this.showResult = false;
                },
                checkAnswer(selectedItem) {
                    this.showResult = true;
                    this.answerCorrect = selectedItem === this.removedItem;
                },
                nextRound() {
                    this.currentRound = (this.currentRound + 1) % this.rounds.length;
                    this.gameStarted = false;
                    this.showResult = false;
                }
            }
        }
const app = Vue.createApp(App);
app.mount('#app')





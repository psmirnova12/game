const App = {
    data() {
        return {
            colors: {
                'Красный': '#E74C3C',
                'Синий': '#3498DB',
                'Желтый': '#F1C40F',
                'Зеленый': '#2ECC71',
                'Оранжевый': '#E67E22',
                'Фиолетовый': '#9B59B6',
                'Розовый': '#FD79A8',
                'Голубой': '#00CEC9',
                'Коричневый': '#A0522D',
                'Серый': '#95A5A6'
            },
            currentColor: '',
            currentColorName: '',
            options: [],
            score: 0,
            isAnswered: false,
            isCorrect: false,
            feedbackMessage: '',
            gameFinished: false,
            usedColors: []
        }
    },
    created() {
        this.startGame();
    },
    methods: {
        goBack() {
            window.history.back();
        },
        startGame() {
            this.score = 0;
            this.gameFinished = false;
            this.usedColors = [];
            this.nextQuestion();
        },
        nextQuestion() {
            if (this.usedColors.length >= Object.keys(this.colors).length) {
                this.gameFinished = true;
                return;
            }

            let availableColors = Object.keys(this.colors).filter(color => !this.usedColors.includes(color));
            this.currentColorName = availableColors[Math.floor(Math.random() * availableColors.length)];
            this.currentColor = this.colors[this.currentColorName];
            this.usedColors.push(this.currentColorName);

            this.options = [this.currentColorName];
            while (this.options.length < 4) {
                const randomColor = Object.keys(this.colors)[Math.floor(Math.random() * Object.keys(this.colors).length)];
                if (!this.options.includes(randomColor)) {
                    this.options.push(randomColor);
                }
            }

            this.options = this.shuffleArray(this.options);

            this.isAnswered = false;
            this.feedbackMessage = '';
        },
        checkAnswer(selectedColor) {
            this.isAnswered = true;
            if (selectedColor === this.currentColorName) {
                this.score++;
                this.isCorrect = true;
                this.feedbackMessage = 'Молодец! Правильно! 👍';
            } else {
                this.isCorrect = false;
                this.feedbackMessage = `Почти! Это ${this.currentColorName} 😊`;
            }
        },
        getColorCode(colorName) {
            return this.colors[colorName] || '#FFFFFF';
        },
        shuffleArray(array) {
            return array.sort(() => Math.random() - 0.5);
        },
        restartGame() {
            this.startGame();
        }
    }
}
const app = Vue.createApp(App);
app.mount('#app')


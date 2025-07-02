const App = {
      data() {
                return {
                    shapes: [
                        { type: 'circle', emoji: '⭕', name: 'круг' },
                        { type: 'square', emoji: '🟨', name: 'квадрат' },
                        { type: 'triangle', emoji: '🔺', name: 'треугольник' },
                        { type: 'star', emoji: '⭐', name: 'звезда' }
                    ],
                    currentShape: null,
                    shapePieces: [],
                    message: 'Найди такую же фигуру!',
                    gameWon: false,
                    hintUsed: false
                }
            },
            created() {
                this.newGame();
            },
            methods: {
                newGame() {
                    // Выбираем случайную фигуру
                    this.currentShape = this.shapes[Math.floor(Math.random() * this.shapes.length)];

                    // Создаем набор фигур с одной правильной
                    this.shapePieces = [];
                    let pieces = [...this.shapes];

                    // Удаляем текущую фигуру из возможных вариантов
                    pieces = pieces.filter(shape => shape.type !== this.currentShape.type);

                    // Добавляем 3 случайные неправильные фигуры
                    for (let i = 0; i < 3; i++) {
                        const randomIndex = Math.floor(Math.random() * pieces.length);
                        this.shapePieces.push(pieces[randomIndex]);
                        pieces.splice(randomIndex, 1);
                    }

                    // Добавляем правильную фигуру
                    this.shapePieces.splice(Math.floor(Math.random() * 4), 0, this.currentShape);

                    this.message = 'Найди такую же фигуру!';
                    this.gameWon = false;
                    this.hintUsed = false;
                },
                selectPiece(piece) {
                    if (this.gameWon) return;

                    if (piece.type === this.currentShape.type) {
                        this.message = 'Ура! Правильно! 🎉';
                        this.gameWon = true;
                    } else {
                        this.message = 'Попробуй еще раз!';
                    }
                },
                showHint() {
                    this.message = `Ищи ${this.currentShape.name} ${this.currentShape.emoji}`;
                    this.hintUsed = true;
                },
                
                getShapeColor(type) {
                    const colors = {
                        'circle': '#FF6B6B',
                        'triangle': '#FECA57',
                        'square': '#FF9F43',
                        'star': '#FECA57',
                        'heart': '#FF6B6B'
                    };
                    return colors[type] || '#FECA57';
                }
            }
        }
const app = Vue.createApp(App);
app.mount('#app')


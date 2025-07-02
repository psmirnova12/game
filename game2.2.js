const App = {
      data() {
        return {
          targetCount: 0,
          currentCount: 0,
          objectType: '',
          feedback: '',
          message: '',
          showNextButton: false,
          emojis: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'],
          objectTypes: ['собачк', 'кошечк', 'мышк', 'хомячк', 'зайчика', 'лисичк', 'медвежонк', 'панду'],
          usedIndices: []
        }
      },
      computed: {
        displayedObjects() {
          // Создаем массив из 6 уникальных животных (1 целевое + 5 других)
          const objects = [];
          
          // Добавляем целевое животное нужное количество раз
          const targetIndex = this.objectTypes.indexOf(this.objectType);
          for (let i = 0; i < this.targetCount; i++) {
            objects.push({
              emoji: this.emojis[targetIndex],
              type: this.objectType
            });
          }
          
          // Добавляем другие уникальные животные
          const otherIndices = [...Array(this.emojis.length).keys()]
            .filter(i => i !== targetIndex && !this.usedIndices.includes(i));
          
          // Перемешиваем оставшиеся индексы
          const shuffled = [...otherIndices].sort(() => 0.5 - Math.random());
          
          // Берем нужное количество (6 - targetCount)
          const needed = 6 - this.targetCount;
          for (let i = 0; i < needed && i < shuffled.length; i++) {
            const idx = shuffled[i];
            objects.push({
              emoji: this.emojis[idx],
              type: this.objectTypes[idx]
            });
          }
          
          // Перемешиваем все объекты перед отображением
          return objects.sort(() => 0.5 - Math.random());
        },
        getCorrectWordForm() {
          if (this.targetCount === 1) return this.objectType;
          if (this.targetCount >= 2 && this.targetCount <= 4) return this.objectType.slice(0, -1) + 'ки';
          return this.objectType.slice(0, -1) + 'ок';
        }
      },
      created() {
        this.generateTask();
      },
      methods: {
        generateTask() {
          // Выбираем тип животного, которое еще не использовалось
          let availableIndices = [...Array(this.objectTypes.length).keys()]
            .filter(i => !this.usedIndices.includes(i));
          
          if (availableIndices.length === 0) {
            // Если все типы использованы, сбрасываем
            this.usedIndices = [];
            availableIndices = [...Array(this.objectTypes.length).keys()];
          }
          
          // Выбираем случайный индекс из доступных
          const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
          this.usedIndices.push(randomIndex);
          
          this.objectType = this.objectTypes[randomIndex];
          this.targetCount = Math.floor(Math.random() * 5) + 1; // Числа от 1 до 3
          this.currentCount = 0;
          this.feedback = '';
          this.message = '';
          this.showNextButton = false;
        },
        checkAnswer(type) {
          if (this.showNextButton) return;
          
          if (type === this.objectType) {
            this.currentCount++;
            
            if (this.currentCount === this.targetCount) {
              this.feedback = 'correct';
              this.message = 'Молодец! Правильно!';
              this.showNextButton = true;
            } else if (this.currentCount < this.targetCount) {
              this.message = `Правильно! Осталось ${this.targetCount - this.currentCount}`;
            }
          } else {
            this.feedback = 'incorrect';
            this.message = 'Ой, это не то! Попробуй еще';
          }
        },
        nextTask() {
          this.generateTask();
        }
      }
    }
const app = Vue.createApp(App);
app.mount('#app')


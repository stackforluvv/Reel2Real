// let test1 = 1; // Это переменная которая может менять свое значение
// const test2 = 3; // Это переменная которая не может менять свое значение
// var test4 = 4; // Это переменная которая может менять свое значение, но не рекомендуется использовать var, так как она устарела и может вызвать проблемы с областью видимости.

// const slovo = "Привет!"; 
// const chislo = 42; 
// const logicheskoe = true; 
// let userName = prompt('Как тебя зовут?');

// if (userName === 'Игорь') {
//     alert('Привет, Игорь!');
// } else {
//     alert('Привет, ' + userName + '! Рад тебя видеть!');
// }

// function functionName(name, age) {
//     console.log('Этому человеку, ' + name  + ', ' + age + ' лет.');
// }

// functionName('Иван', 25); 

// const functionName = (name, age) => {
//     console.log('Этому человеку, ' + name  + ', ' + age + ' лет.');
// }

// const add = (a, b) => {
//     return a + b;
// }

// const subtract = (a, b) => {
//     return a - b;
// }

// const multiply = (a, b) => { 
//     return a * b; 
// }

// const divide = (a, b) => {
//     return a / b;
// }

// functionName('Иван', 25);
// console.log(add(5, 10));
// console.log(subtract(10, 5));
// console.log(multiply(5, 10));
// console.log(divide(10, 5));

// const name = "Игорь";
// const age = 18;
// const movie = "Пила";
// const restrictedMovies = ['Пила', 'Заклятие', 'Синистер', 'Астрал', 'Ведьма из Блэр', 'Хэллоуин', 'Оно', 'Проклятие', 'Сайлент Хилл', 'Звонок'];
// const messageElement = document.getElementById('message');

// // OR = ||
// // AND = &&

// const checkUser = (name, age, movie) => {
//     if (age < 18 && restrictedMovies.includes(movie)) {
//         messageElement.textContent = 'Извините, ' + name + ', но вы не можете пойти на фильм "' + movie + '" так как вам меньше 18 лет.';
//     } else {
//         messageElement.textContent = 'Приятного просмотра, ' + name + '! Вы можете пойти на фильм "' + movie + '".';
//     }
// }

// checkUser(name, age, movie);
// console.log(age >= 18 && restrictedMovies.includes(movie));

const inputElement = document.getElementById('userInput');
const userGreeting = document.getElementById('greeting');

const greetUser = () => {
    const userName = inputElement.value.trim();
    
    if (userName !== '') {
        userGreeting.textContent = `Привет, ${userName}!`;
    } else {
        userGreeting.textContent = '';

    }
}

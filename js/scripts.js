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

//const inputElement = document.getElementById('userInput');
//const userGreeting = document.getElementById('greeting');

//const greetUser = () => {
    //const userName = inputElement.value.trim();
    
    //if (userName !== '') {
       // userGreeting.textContent = `Привет, ${userName}!`;
    //} else {
        //userGreeting.textContent = '';

    //}
//}


// ---------- Форма контактов ----------

const contactForm = document.getElementById('contactForm');
const contactSubmit = document.getElementById('contactSubmit');
const formSuccess = document.getElementById('formSuccess');
const successTitle = document.getElementById('successTitle');
const contactAgain = document.getElementById('contactAgain');
const messageField = contactForm.elements.message;
const messageCounter = document.getElementById('messageCounter');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const telegramPattern = /^@[a-zA-Z0-9_]{4,}$/;

const isValidContact = (value) => {
    const digits = value.replace(/\D/g, '');
    return emailPattern.test(value) || telegramPattern.test(value) || digits.length >= 10;
}

const setError = (field, text) => {
    const wrapper = field.closest('.field');
    wrapper.classList.toggle('invalid', text !== '');
    wrapper.querySelector('.field-error').textContent = text;
}

const validateForm = () => {
    const name = contactForm.elements.name;
    const contact = contactForm.elements.contact;
    let isValid = true;

    if (name.value.trim() === '') {
        setError(name, 'Нам нужно как-то к вам обращаться');
        isValid = false;
    } else {
        setError(name, '');
    }

    if (contact.value.trim() === '') {
        setError(contact, 'Без этого мы не сможем ответить');
        isValid = false;
    } else if (!isValidContact(contact.value.trim())) {
        setError(contact, 'Похоже на опечатку. Проверьте, пожалуйста');
        isValid = false;
    } else {
        setError(contact, '');
    }

    if (messageField.value.trim().length < 5) {
        setError(messageField, 'Напишите хотя бы пару слов');
        isValid = false;
    } else {
        setError(messageField, '');
    }

    return isValid;
}

// Поле сообщения растёт вместе с текстом
messageField.addEventListener('input', () => {
    messageField.style.height = 'auto';
    messageField.style.height = messageField.scrollHeight + 'px';
    messageCounter.textContent = `${messageField.value.length} / 1000`;
});

// Убираем ошибку, как только человек начал исправлять
contactForm.addEventListener('input', (event) => {
    if (event.target.closest('.field.invalid')) {
        setError(event.target, '');
    }
});

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!validateForm()) {
        contactForm.querySelector('.field.invalid input, .field.invalid textarea').focus();
        return;
    }

    contactSubmit.disabled = true;
    contactSubmit.textContent = 'Отправляем…';

    // Здесь будет настоящая отправка на сервер, пока просто имитируем
    setTimeout(() => {
        successTitle.textContent = `Спасибо, ${contactForm.elements.name.value.trim()}!`;
        contactForm.hidden = true;
        formSuccess.hidden = false;
        contactSubmit.disabled = false;
        contactSubmit.textContent = 'Отправить';
    }, 1200);
});

contactAgain.addEventListener('click', () => {
    contactForm.reset();
    messageField.style.height = 'auto';
    messageCounter.textContent = '0 / 1000';
    formSuccess.hidden = true;
    contactForm.hidden = false;
});

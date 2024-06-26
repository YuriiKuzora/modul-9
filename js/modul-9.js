'use strict';

// localStorage.setItem('images', JSON.stringify(images));
// // localStorage.removeItem('images');
// console.log(localStorage);

// const savedImages = localStorage.getItem('images');
// console.log(savedImages);

// const parsedImages = JSON.parse(savedImages);
// console.log(parsedImages);

// localStorage.clear();
// console.log(localStorage);

// sessionStorage.setItem('user-id', '123');
// sessionStorage.setItem('tickets', JSON.stringify({ from: 'Lviv', to: 'Kyiv', quantity: 2 }));
// console.log(sessionStorage);
// // Storage {user-id: '123', tickets: '{"from":"Lviv","to":"Kyiv","quantity":2}', length: 2}

// const userId = sessionStorage.getItem('user-id');
// console.log(userId); // "123"

// const tickets = JSON.parse(sessionStorage.getItem('tickets'));
// console.log(tickets); // { from: "Lviv", to: "Kyiv", quantity: 2 }

// ---------------------------

// const form = document.querySelector('.feedback-form');

// form.addEventListener('submit', evt => {
//   evt.preventDefault();
//   console.log(evt.target.elements.message.value);
//   form.reset();
// });

// ___________________________

// const form = document.querySelector('.feedback-form');
// const localStorageKey = 'goit-example-message';

// form.addEventListener('input', evt => {
//   localStorage.setItem(localStorageKey, evt.target.value);
// });

// form.addEventListener('submit', evt => {
//   evt.preventDefault();
//   console.log(evt.target.elements.message.value);
//   form.reset();
// });

// ___________________________

const form = document.querySelector('.feedback-form');
const textarea = form.elements.message;
const localStorageKey = 'goit-example-message';

textarea.value = localStorage.getItem(localStorageKey) ?? '';

form.addEventListener('input', evt => {
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log(evt.target.elements.message.value);
  localStorage.removeItem(localStorageKey);
  form.reset();
});

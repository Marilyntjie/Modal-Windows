'use strict';

const modal = document.querySelector('.modal');
const button = document.querySelectorAll('button');

let closeModal = function () {
  document.querySelector('.modal').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');
};

let openModal = function () {
  document.querySelector('.modal').classList.remove('hidden');
  document.querySelector('.overlay').classList.remove('hidden');
};

// 3 Show Modal Buttons to open modal

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', openModal);
}

// Close modal button on modal window to close modal

document.querySelector('.close-modal').addEventListener('click', closeModal);

// Close when clicking outside of modal window to close modal

document.querySelector('.overlay').addEventListener('click', closeModal);

// Close on pressign Escape for modal window to close

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

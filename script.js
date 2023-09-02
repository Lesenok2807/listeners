'use strict';

const btn = document.getElementById('btn');
const input = document.getElementById('text');
const square = document.getElementById('square');
const eBtn = document.getElementById('e_btn');
const range = document.getElementById('range');
const span = document.getElementById('range-span');
const circle = document.getElementById('circle');

const logger = function() {
    square.style.backgroundColor = input.value;
}

const loggerRange = function(event) {
    span.textContent = event.target.value + '%';
    circle.style.width = span.textContent;
    circle.style.height = span.textContent;
}

eBtn.style.display = 'none';

btn.addEventListener('click', logger);
range.addEventListener('input', loggerRange);
range.addEventListener('change', loggerRange);






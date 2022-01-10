/* eslint-disable no-unused-vars */
import render, { BookInventory } from './modules/renderBookList.js';
import {
  allBooksSection,
  formSection,
  contactSection,
  listNav,
} from './modules/pageNavigation.js';

import { DateTime } from './node_modules/luxon/build/es6/luxon.js';

const date = document.querySelector('#date');

const dateToday = DateTime.now();
const formOne = document.getElementById('form__one');

let formatDate = dateToday.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);

formatDate = formatDate.replace('GMT+1', '');
date.textContent = `${formatDate}`;

render();
// ADD EVENTLISTNER (Add Button)
formOne.addEventListener('submit', (e) => {
  e.preventDefault();
  BookInventory.addBook();
  render();
});

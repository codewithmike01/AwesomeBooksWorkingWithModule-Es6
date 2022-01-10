/* eslint-disable no-unused-vars */
import render, { BookInventory } from './modules/renderBookList.js';
import {
  allBooksSection,
  formSection,
  contactSection,
  listNav,
} from './modules/pageNavigation.js';

const formOne = document.getElementById('form__one');
render();

// ADD EVENTLISTNER (Add Button)
formOne.addEventListener('submit', (e) => {
  e.preventDefault();
  BookInventory.addBook();
  render();
});

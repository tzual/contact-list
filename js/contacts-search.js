import { getContactsFromLS, populateContactsList } from './contacts-list.js';

export const initContactsSearch = () => {
  const $contactsSearch = document.querySelector('#search-field');
  $contactsSearch.addEventListener('keyup', (event) => {
    const $contactReocordList = document.querySelector('#contact-record-list');
    $contactReocordList.innerHTML = '';
    const contactsList = getContactsFromLS();
    const relevantContactsList = contactsList.filter((item) =>
      item.name.toLowerCase().includes($contactsSearch.value.toLowerCase())
    );
    populateContactsList(relevantContactsList);
  });
};

import { getFakeContacts } from './fake-contacts.js';

export const getContactsFromLS = () => {
  const contactsList = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    contactsList.push({ name: key, ...JSON.parse(localStorage.getItem(key)) });
  }
  contactsList.sort((a, b) => {
    const aName = a.name.toLowerCase();
    const bName = b.name.toLowerCase();
    if (aName < bName) {
      return -1;
    }
    if (aName > bName) {
      return 1;
    }
    return 0;
  });
  return contactsList;
};

export const populateContactsList = (contactsList) => {
  for (const contact of contactsList) {
    const $contactRecord = document.createElement('contact-record');
    $contactRecord.init(contact);
    const $contactReocordList = document.querySelector('#contact-record-list');
    $contactReocordList.append($contactRecord);
  }
};

export const initContactsList = () => {
  let contactsList = getContactsFromLS();
  if (contactsList.length === 0) {
    if (confirm('it seems your contacts list is empty, would you like to load fake contacts?')) {
      contactsList = getFakeContacts();
    }
  }
  populateContactsList(contactsList);
};

export const clearContactsList = () => {
  const $contactReocordList = document.querySelector('#contact-record-list');
  $contactReocordList.innerHTML = '';
};

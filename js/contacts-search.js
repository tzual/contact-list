import { getContactsFromLS } from './local-storage.js';

export const initContactsSearch = () => {
  const $contactSearch = document.querySelector('#search-field');
  $contactSearch.addEventListener('keyup', (event) => {
    const contactList = getContactsFromLS();
    const relevantContactsList = contactList.filter((item) =>
      item.name.toLowerCase().includes($contactSearch.value.toLowerCase())
    );
    const $contactRecordList = document.querySelector('contact-record-list');
    $contactRecordList.clear();
    $contactRecordList.populate(relevantContactsList);
  });
};

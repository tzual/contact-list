import { getContactsFromLS } from './local-storage.js';

class ContactRecordSearch extends HTMLInputElement {
  constructor() {
    super();

    this.addEventListener('keyup', this.updateContactRecordList);
  }

  updateContactRecordList(event) {
    const contactList = getContactsFromLS();
    const relevantContactsList = contactList.filter((item) =>
      item.name.toLowerCase().includes(this.value.toLowerCase())
    );
    const $contactRecordList = document.querySelector('contact-record-list');
    $contactRecordList.clear();
    $contactRecordList.populate(relevantContactsList);
  }
}

const defineContactRecordSearch = () => {
  customElements.define('contact-record-search', ContactRecordSearch, { extends: 'input' });
};

export { defineContactRecordSearch };

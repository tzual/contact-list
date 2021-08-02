import { getContactsFromLS } from './local-storage.js';

class ContactRecordList extends HTMLElement {
  constructor() {
    super();

    this.ContactsList = getContactsFromLS();
  }

  connectedCallback() {
    this.populate();
  }

  clear() {
    this.innerHTML = '';
  }

  populate(contactList) {
    if (typeof contactList !== 'undefined') {
      this.ContactsList = contactList;
    }
    const frag = document.createDocumentFragment();
    for (const contact of this.ContactsList) {
      const $contactRecord = document.createElement('contact-record');
      $contactRecord.init(contact);
      frag.append($contactRecord);
    }
    this.append(frag);
  }

  refresh() {
    this.ContactsList = getContactsFromLS();
    this.clear();
    this.populate();
  }
}

const defineContactRecordList = () => {
  customElements.define('contact-record-list', ContactRecordList);
};

export { defineContactRecordList, ContactRecordList };

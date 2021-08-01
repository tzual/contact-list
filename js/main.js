import { defineContactRecord } from './contact-record.js';
defineContactRecord();
import { defineContactRecordList } from './contact-record-list.js';
defineContactRecordList();

import { promptFakeContacts } from './fake-contacts.js';
import { initContactsSearch } from './contacts-search.js';
import { initContactDetailsForm } from './contact-details-form.js';
import { initContactDetailsCard } from './contact-details-card.js';
import { initDeleteAllContactsBtn } from './delete-all-contacts.js';

const initApp = () => {
  promptFakeContacts();
  initContactsSearch();
  initContactDetailsForm();
  initContactDetailsCard();
  initDeleteAllContactsBtn();
};

initApp();

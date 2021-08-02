import { defineContactRecord } from './contact-record.js';
defineContactRecord();

import { defineContactRecordList } from './contact-record-list.js';
defineContactRecordList();

import { defineContactRecordSearch } from './contact-record-search.js';
defineContactRecordSearch();


import { defineDeleteAllContactRecords } from './delete-all-contact-records-btn.js';
defineDeleteAllContactRecords();

import { defineContactDetailsCard } from './contact-details-card.js';
defineContactDetailsCard();

import { promptFakeContacts } from './fake-contacts.js';
import { initContactDetailsForm } from './contact-details-form.js';

const initApp = () => {
  promptFakeContacts();
  initContactDetailsForm();
};

initApp();

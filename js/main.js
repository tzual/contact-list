import { defineContactRecord } from './contact-record.js';
defineContactRecord();

import { initContactsList } from './contacts-list.js';
import { initContactsSearch } from './contacts-search.js';
import { initContactDetailsForm } from './contact-details-form.js';
import { initContactDetailsCard } from './contact-details-card.js';
import { initDeleteAllContactsBtn } from './delete-all-contacts.js';

const initApp = () => {
  initContactsList();
  initContactsSearch();
  initContactDetailsForm();
  initContactDetailsCard();
  initDeleteAllContactsBtn();
};

initApp();

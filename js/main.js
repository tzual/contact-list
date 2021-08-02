import { defineContactRecord } from './contact-record.js';
import { defineContactRecordList } from './contact-record-list.js';
import { defineContactRecordSearch } from './contact-record-search.js';
import { defineAddContactRecordButton } from './add-contact-record-btn.js';
import { defineDeleteAllContactRecords } from './delete-all-contact-records-btn.js';
import { defineContactDetailsCard } from './contact-details-card.js';
import { defineContactDetailsForm } from './contact-details-form.js';
import { promptFakeContacts } from './fake-contacts.js';

defineContactRecord();
defineContactRecordList();
defineContactRecordSearch();
defineAddContactRecordButton();
defineDeleteAllContactRecords();
defineContactDetailsCard();
defineContactDetailsForm();

promptFakeContacts();

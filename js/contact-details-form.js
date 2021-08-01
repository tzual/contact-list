import { saveContactToLS } from './local-storage.js';

const initContactDetailsFormOpenListener = () => {
  const $addContactButton = document.querySelector('#add-contact-btn');
  $addContactButton.addEventListener('click', (event) => {
    event.preventDefault();
    // we need to clear the form fields from the previous use
    const $contactDetailsForm = document.querySelector('#contact-details-form');
    for (const field of $contactDetailsForm.elements) {
      if (field.name.includes('contact')) {
        field.value = '';
      }
    }
    $contactDetailsForm.parentElement.classList.add('visible');
    const $contactNameField = $contactDetailsForm.querySelector('input[name="contact-name"]');
    $contactNameField.focus();
  });
};

const initContactDetailsFormCloseListener = () => {
  const $contactDetailsFormClose = document.querySelector('#contact-details-form .close-modal');
  $contactDetailsFormClose.addEventListener('click', (event) => {
    event.preventDefault();
    const $contactDetailsForm = document.querySelector('#contact-details-form');
    $contactDetailsForm.parentElement.classList.remove('visible');
    $contactDetailsForm.setAttribute('data-contact-name', '');
  });
};

const initContactDetailsFormSubmitListener = () => {
  const $contactDetailsForm = document.querySelector('#contact-details-form');
  $contactDetailsForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const contactDetails = {};
    for (const field of $contactDetailsForm.elements) {
      if (field.name.includes('contact')) {
        contactDetails[field.name.split('-')[1]] = field.value;
      }
    }

    if (!$contactDetailsForm.getAttribute('data-contact-name')) {
      // add contact
      // since the system only accepts unique names we use the name as the localStorage key
      if (localStorage.getItem(contactDetails.name) !== null) {
        alert('this contact already exists!');
        $contactDetailsForm.setAttribute('data-contact-name', '');
        return;
      }
    } else {
      // edit contact
      const oldContactName = $contactDetailsForm.getAttribute('data-contact-name');
      localStorage.removeItem(oldContactName);
      $contactDetailsForm.setAttribute('data-contact-name', '');
    }

    saveContactToLS(contactDetails);
    const $contactRecordList = document.querySelector('contact-record-list');
    $contactRecordList.refresh();

    $contactDetailsForm.parentElement.classList.remove('visible');
  });
};

export const initContactDetailsForm = () => {
  initContactDetailsFormOpenListener();
  initContactDetailsFormCloseListener();
  initContactDetailsFormSubmitListener();
};

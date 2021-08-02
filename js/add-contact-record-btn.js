import { ContactDetailsForm } from './contact-details-form.js';

class AddContactRecordButton extends HTMLButtonElement {
    constructor() {
      super();
  
      this.addEventListener('click', this.showContactDetailsForm);
    }

    showContactDetailsForm(event) {
      event.preventDefault();
      // we need to clear the form fields from the previous use
      /** @type ContactDetailsForm */
      const $contactDetailsForm = document.querySelector('contact-details-form');
      $contactDetailsForm.show();
    };
  
  }
  
  const defineAddContactRecordButton = () => {
    customElements.define('add-contact-record-btn', AddContactRecordButton, {
      extends: 'button',
    });
  };
  
  export { defineAddContactRecordButton };
  
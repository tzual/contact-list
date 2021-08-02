import { ContactRecordList } from './contact-record-list.js';
import { saveContactToLS } from './local-storage.js';
import { html } from './html.js';

class ContactDetailsForm extends HTMLElement {
  constructor() {
    super();

    this.hide = this.hide.bind(this);
    this.submit = this.submit.bind(this);
  }

  connectedCallback() {
    this.append(html`
      <form id="contact-details-form">
        <a href="#" class="close-modal" close-modal>x</a>
        <h2 id="contact-details-form-header">Contact Form</h2>
        <label for="contact-details-form-name-field"
          >Name<span class="required-field">*</span></label
        >
        <input id="contact-details-form-name-field" type="text" name="contact-name" required />
        <label for="contact-details-form-phone-field"
          >Telephone<span class="required-field">*</span></label
        >
        <input
          id="contact-details-form-phone-field"
          type="tel"
          name="contact-phone"
          required
          pattern="[0-9]{10}"
          placeholder="01234567890"
          title="Please fill out this field with ten consecutive digits without symbols"
        />
        <label for="contact-details-form-addr-field">Address</label>
        <input id="contact-details-form-addr-field" type="text" name="contact-addr" />
        <label for="contact-details-form-email-field">Email</label>
        <input id="contact-details-form-email-field" type="email" name="contact-email" />
        <label for="contact-details-form-desc-field">Description</label>
        <textarea id="contact-details-form-desc-field" name="contact-desc" rows="3"></textarea>
        <input type="submit" value="Save" />
      </form>
    `);

    this.$closeBtn = this.querySelector('[close-modal]');
    this.$closeBtn.addEventListener('click', this.hide);
    this.$form = this.querySelector('#contact-details-form');
    this.$form.addEventListener('submit', this.submit);
  }

  show() {
    for (const field of this.$form.elements) {
      if (field.name.includes('contact')) {
        field.value = '';
      }
    }
    this.classList.add('visible');
    /** @type HTMLInputElement */
    const $contactNameField = this.$form.querySelector('input[name="contact-name"]');
    $contactNameField.focus();
  }

  hide(event) {
    event.preventDefault();
    this.classList.remove('visible');
    this.$form.setAttribute('data-contact-name', '');
  }

  submit(event) {
    event.preventDefault();

    const contactDetails = {};
    for (const field of this.$form.elements) {
      if (field.name.includes('contact')) {
        contactDetails[field.name.split('-')[1]] = field.value;
      }
    }

    if (!this.$form.getAttribute('data-contact-name')) {
      // add contact
      // since the system only accepts unique names we use the name as the localStorage key
      if (localStorage.getItem(contactDetails.name) !== null) {
        alert('this contact already exists!');
        this.$form.setAttribute('data-contact-name', '');
        return;
      }
    } else {
      // edit contact
      const oldContactName = this.$form.getAttribute('data-contact-name');
      localStorage.removeItem(oldContactName);
      this.$form.setAttribute('data-contact-name', '');
    }

    saveContactToLS(contactDetails);
    /** @type ContactRecordList */
    const $contactRecordList = document.querySelector('contact-record-list');
    $contactRecordList.refresh();

    this.classList.remove('visible');
  }
}

const defineContactDetailsForm = () => {
  customElements.define('contact-details-form', ContactDetailsForm);
};

export { defineContactDetailsForm, ContactDetailsForm };

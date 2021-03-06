import { ContactDetailsCard } from './contact-details-card.js';
import { saveContactToLS } from './local-storage.js';
import { html } from './html.js';

class ContactRecord extends HTMLElement {
  constructor() {
    super();

    /*
     * since these are callbacks for event listeners they will have this set to
     * event.target so to use this of the custom element in them it must be
     * explicitly bound.
     */
    this.showFullDetails = this.showFullDetails.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
  }

  connectedCallback() {
    this.displayName.addEventListener('click', this.showFullDetails);
    this.displayTel.addEventListener('click', this.showFullDetails);
    this.EditBtn.addEventListener('click', this.showEditForm);
    this.deleteBtn.addEventListener('click', this.confirmDelete);
    this.addEventListener('mouseover', this.highlight);
    this.addEventListener('mouseout', this.unhighlight);
  }

  disconnectedCallback() {
    this.displayName.removeEventListener('click', this.showFullDetails);
    this.displayTel.removeEventListener('click', this.showFullDetails);
    this.EditBtn.removeEventListener('click', this.showEditForm);
    this.deleteBtn.removeEventListener('click', this.confirmDelete);
    this.removeEventListener('mouseover', this.highlight);
    this.removeEventListener('mouseout', this.unhighlight);
  }

  init(contactDetailsObj) {
    this.append(html`
      <div class="contact-record-detail contact-name">
        <span class="contact-detail" contact-name></span>
      </div>
      <div class="contact-record-detail contact-phone">
        <span class="contact-detail" contact-phone></span>
      </div>
      <button type="button" class="app-btn contact-edit-btn" edit-contact>
        <img src="./assets/icons/edit.svg" alt="edit contact" class="btn-icon" />
        <span>Edit</span>
      </button>
      <button type="button" class="app-btn contact-delete-btn" delete-contact>
        <img src="./assets/icons/delete.svg" alt="delete contact" class="btn-icon" />
        <span>Delete</span>
      </button>
    `);

    this.displayName = this.querySelector('[contact-name]');
    this.displayTel = this.querySelector('[contact-phone]');
    this.EditBtn = this.querySelector('[edit-contact]');
    this.deleteBtn = this.querySelector('[delete-contact]');

    for (const key in contactDetailsObj) {
      this[key] = contactDetailsObj[key];
      this.setAttribute(key, contactDetailsObj[key]);
    }

    this.displayName.innerText = this.name;
    this.displayTel.innerText = this.phone;

    saveContactToLS(this);
  }

  showFullDetails(event) {
    /** @type ContactDetailsCard */
    const contactDetailsCard = document.querySelector('contact-details-card');
    contactDetailsCard.show({
      name: this.name,
      phone: this.phone,
      addr: this.addr,
      email: this.email,
      desc: this.desc,
    });
  }

  showEditForm(event) {
    event.preventDefault();
    // we need to populate the form fields with the existing contact details
    const $contactDetailsForm = document.querySelector('#contact-details-form');
    for (const field of $contactDetailsForm.elements) {
      if (field.name.includes('contact')) {
        field.value = this[field.name.split('-')[1]];
      }
    }
    $contactDetailsForm.setAttribute('data-contact-name', this.name);
    $contactDetailsForm.parentElement.classList.add('visible');
    const $contactNameField = $contactDetailsForm.querySelector('input[name="contact-name"]');
    $contactNameField.focus();
  }

  confirmDelete(event) {
    if (confirm('WARNING, deleting a contact is irreversible, are you sure?')) {
      localStorage.removeItem(this.name);
      this.remove();
    }
  }

  highlight(event) {
    this.classList.add('highlight');
  }

  unhighlight(event) {
    this.classList.remove('highlight');
  }
}

const defineContactRecord = () => {
  customElements.define('contact-record', ContactRecord);
};

export { defineContactRecord };

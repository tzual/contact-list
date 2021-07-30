import { populateContactDetailsCard, showContactDetailsCard } from './contact-details-card.js';
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

  static get observedAttributes() {
    return ['name', 'phone'];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    switch (attr) {
      case 'name':
        this.displayName.innerText = newValue;
        break;
      case 'phone':
        this.displayTel.innerText = newValue;
        break;
    }
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
    if (event.target.tagName.toLowerCase() == 'span') {
      populateContactDetailsCard({
        name: this.name,
        phone: this.phone,
        addr: this.addr,
        email: this.email,
        desc: this.desc,
      });
      showContactDetailsCard();
    }
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

  get name() {
    return this.getAttribute('name');
  }

  set name(newValue) {
    this.setAttribute('name', newValue);
    saveContactToLS(this);
  }

  get phone() {
    return this.getAttribute('phone');
  }

  set phone(newValue) {
    this.setAttribute('phone', newValue);
    saveContactToLS(this);
  }

  get addr() {
    return this.getAttribute('addr');
  }

  set addr(newValue) {
    this.setAttribute('addr', newValue);
    saveContactToLS(this);
  }

  get email() {
    return this.getAttribute('email');
  }

  set email(newValue) {
    this.setAttribute('email', newValue);
    saveContactToLS(this);
  }

  get desc() {
    return this.getAttribute('desc');
  }

  set desc(newValue) {
    this.setAttribute('desc', newValue);
    saveContactToLS(this);
  }
}

const defineContactRecord = () => {
  customElements.define('contact-record', ContactRecord);
};

const saveContactToLS = (contactDetails) => {
  localStorage.setItem(
    contactDetails.name,
    JSON.stringify({
      phone: contactDetails.phone,
      addr: contactDetails.addr,
      email: contactDetails.email,
      desc: contactDetails.desc,
    })
  );
};

export { defineContactRecord, saveContactToLS };

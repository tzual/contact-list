import { html } from './html.js';

class ContactDetailsCard extends HTMLElement {
  constructor() {
    super();

    this.hide = this.hide.bind(this);
  }

  connectedCallback() {
    this.append(html`
      <article id="contact-details-card">
        <a href="#" class="close-modal" close-modal>x</a>
        <h2 id="contact-details-card-name-field">contact-name</h2>
        <span id="contact-details-card-phone-label">Telephone</span>
        <span id="contact-details-card-phone-field"></span>
        <span id="contact-details-card-addr-label">Address</span>
        <span id="contact-details-card-addr-field"></span>
        <span id="contact-details-card-email-label">Email</span>
        <span id="contact-details-card-email-field"></span>
        <span id="contact-details-card-desc-label">Description</span>
        <span id="contact-details-card-desc-field"></span>
      </article>
    `);

    this.$closeBtn = this.querySelector('[close-modal]');
    this.$closeBtn.addEventListener('click', this.hide);
  }

  hide(event) {
    event.preventDefault();
    this.classList.remove('visible');
  }

  show(contactDetails) {
    for (const prop in contactDetails) {
      const label = document.querySelector(`#contact-details-card-${prop}-label`);
      const field = document.querySelector(`#contact-details-card-${prop}-field`);
      if (prop == 'name' || prop == 'phone') {
        field.innerText = contactDetails[prop];
      } else {
        if (contactDetails[prop]) {
          label.classList.remove('hidden');
          field.classList.remove('hidden');
          field.innerText = contactDetails[prop];
        } else {
          label.classList.add('hidden');
          field.classList.add('hidden');
        }
      }
    }
    this.classList.add('visible');
  }
}

const defineContactDetailsCard = () => {
  customElements.define('contact-details-card', ContactDetailsCard);
};

export { defineContactDetailsCard, ContactDetailsCard };

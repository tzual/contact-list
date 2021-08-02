import { html } from './html.js';

class ContactsApp extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.append(html`
      <header>
        <h1>Contact list app</h1>
        <div class="actions-bar">
          <input is="contact-record-search" />
          <button type="button" class="app-btn" is="add-contact-record-btn">
            <img src="./assets/icons/add.svg" alt="add contact" class="btn-icon" />
            <span>Add</span>
          </button>
          <button type="button" class="app-btn" is="delete-all-contact-records-btn">
            <img src="./assets/icons/delete-all.svg" alt="delete all contacts" class="btn-icon" />
            <span>Clear</span>
          </button>
        </div>
      </header>

      <contact-record-list></contact-record-list>

      <footer>
        <p>Tzoor & Zehava</p>
      </footer>

      <contact-details-card class="modal"></contact-details-card>
      <contact-details-form class="modal"></contact-details-form>
    `);
  }
}

const defineContactsApp = () => {
  customElements.define('contacts-app', ContactsApp);
};

export { defineContactsApp };

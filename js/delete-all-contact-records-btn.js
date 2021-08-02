class DeleteAllContactRecordsButton extends HTMLButtonElement {
  constructor() {
    super();

    this.addEventListener('click', this.deleteAllContactRecords);
  }

  deleteAllContactRecords(event) {
    if (confirm('WARNING, Deleting all contacts is irreversible, are you sure?')) {
      localStorage.clear();
      document.querySelector('contact-record-list').innerHTML = '';
    }
  }
}

const defineDeleteAllContactRecords = () => {
  customElements.define('delete-all-contact-records-btn', DeleteAllContactRecordsButton, {
    extends: 'button',
  });
};

export { defineDeleteAllContactRecords };

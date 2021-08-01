export const initDeleteAllContactsBtn = () => {
  const $deleteAllContactsBtn = document.querySelector('#delete-all-contacts-btn');
  $deleteAllContactsBtn.addEventListener('click', () => {
    if (!confirm('WARNING, Deleting all contacts is irreversible, are you sure?')) {
      return;
    }
    localStorage.clear();
    document.querySelector('contact-record-list').innerHTML = '';
  });
};

const initContactDetailsCardClose = () => {
  const $contactDetailsCardClose = document.querySelector('#contact-details-card .close-modal');
  $contactDetailsCardClose.addEventListener('click', (event) => {
    event.preventDefault();
    const $contactDetailsForm = document.querySelector('#contact-details-card');
    $contactDetailsForm.parentElement.classList.remove('visible');
  });
};

export const populateContactDetailsCard = (contactDetails) => {
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
};

export const showContactDetailsCard = () => {
  const $contactDetailsCard = document.querySelector('#contact-details-card');
  $contactDetailsCard.parentElement.classList.add('visible');
};

export const initContactDetailsCard = () => {
  initContactDetailsCardClose();
};

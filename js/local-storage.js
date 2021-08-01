const getContactsFromLS = () => {
  const contactsList = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    contactsList.push({ name: key, ...JSON.parse(localStorage.getItem(key)) });
  }
  contactsList.sort((a, b) => {
    const aName = a.name.toLowerCase();
    const bName = b.name.toLowerCase();
    if (aName < bName) {
      return -1;
    }
    if (aName > bName) {
      return 1;
    }
    return 0;
  });
  return contactsList;
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

export { getContactsFromLS, saveContactToLS };

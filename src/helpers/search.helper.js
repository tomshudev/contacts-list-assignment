export const searchContacts = (contacts, searchValue) => {
  return contacts.filter(
    (contact) =>
      contact.name.includes(searchValue) ||
      contact.job.includes(searchValue) ||
      contact.company_name.includes(searchValue) ||
      contact.email.includes(searchValue)
  );
};

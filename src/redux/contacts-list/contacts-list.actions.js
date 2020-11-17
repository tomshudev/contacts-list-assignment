export const ContactsListActionTypes = {
    SEARCH_VALUE_CHANGED: 'SEARCH_VALUE_CHANGED',
    SET_CONTACTS_LIST: 'SET_CONTACTS_LIST'
}

export const searchValueChanged = (searchValue) => ({
    type: ContactsListActionTypes.SEARCH_VALUE_CHANGED,
    payload: searchValue
});

export const setContactsList = (contacts) => ({
    type: ContactsListActionTypes.SET_CONTACTS_LIST,
    payload: contacts
});

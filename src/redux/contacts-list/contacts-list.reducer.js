import { ContactsListActionTypes } from "./contacts-list.actions";

const initialState = {
  searchValue: "",
  contacts: undefined,
};

const contactsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ContactsListActionTypes.SEARCH_VALUE_CHANGED: {
      return {
        ...state,
        searchValue: action.payload,
      };
    }

    case ContactsListActionTypes.SET_CONTACTS_LIST: {
      return {
        ...state,
        contacts: action.payload,
      };
    }

    default:
      return state;
  }
};

export default contactsListReducer;

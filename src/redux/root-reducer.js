import { combineReducers } from "redux";
import contactsListReducer from "./contacts-list/contacts-list.reducer";

export default combineReducers({
    contactsList: contactsListReducer
});
import React from "react";
import { connect } from "react-redux";
import { searchContacts } from "../../helpers/search.helper";
import { searchValueChanged } from "../../redux/contacts-list/contacts-list.actions";
import Contact from "../contact/contact.component";
import ContactsListHeader from "../contacts-list-header/contacts-list-header.component";
import Spinner from "../spinner/spinner.component";

import "./contacts-list.styles.scss";

function ContactsList({ contacts, searchValueChanged }) {
  // If the contacts list exists we will display it,
  // Otherwise, we can know that the contacts have not been loaded yet
  return contacts ? (
    <div className="contacts-list">
      <ContactsListHeader searchValueChanged={searchValueChanged} />

      {
        // If the contacts list is not empty, we display all the contacts
        // Otherwise, it means the search did not find any contacts so we will display
        // a message about it
        contacts.length > 0 ? (
          <div className="contacts">
            {contacts.map((contact, index) => (
              <Contact key={index} contact={contact} />
            ))}
          </div>
        ) : (
          <span className="not-found">We couldn't find any contact...</span>
        )
      }
    </div>
  ) : (
    <Spinner />
  );
}

const mapStateToProps = (state) => ({
  contacts:
    state.contactsList.contacts &&
    searchContacts(state.contactsList.contacts, state.contactsList.searchValue),
});

const mapDispatchToProps = (dispatch) => ({
  searchValueChanged: (searchValue) =>
    dispatch(searchValueChanged(searchValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

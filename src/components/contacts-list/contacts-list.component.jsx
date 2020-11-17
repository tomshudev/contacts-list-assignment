import React from "react";
import { connect } from "react-redux";
import { searchContacts } from "../../helpers/search.helper";
import { searchValueChanged } from "../../redux/contacts-list/contacts-list.actions";
import Contact from "../contact/contact.component";
import ContactsListHeader from "../contacts-list-header/contacts-list-header.component";

import "./contacts-list.styles.scss";

function ContactsList({ contacts, searchValueChanged }) {
  return (
    <div className="contacts-list">
      <ContactsListHeader searchValueChanged={searchValueChanged} />
      <div className="contacts">
        {contacts.map((contact, index) => (
          <Contact key={index} contact={contact} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  contacts: searchContacts(
    state.contactsList.contacts,
    state.contactsList.searchValue
  ),
});

const mapDispatchToProps = (dispatch) => ({
  searchValueChanged: (searchValue) =>
    dispatch(searchValueChanged(searchValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

import React from "react";
import { connect } from "react-redux";
import { searchValueChanged } from "../../redux/contacts-list/contacts-list.actions";
import Contact from "../contact/contact.component";
import ContactsListHeader from "../contacts-list-header/contacts-list-header.component";

import "./contacts-list.styles.scss";

function ContactsList({ contacts, searchValueChanged }) {
  return (
    <>
      <ContactsListHeader searchValueChanged={searchValueChanged} />
      <div className="contacts-list">
        {contacts.map((contact, index) => (
          <Contact key={index} contact={contact} />
        ))}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  contacts: state.contactsList.contacts,
});

const mapDispatchToProps = (dispatch) => ({
  searchValueChanged: (searchValue) =>
    dispatch(searchValueChanged(searchValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

import React from "react";

import "./contacts-list-header.styles.scss";

function ContactsListHeader({ searchValueChanged }) {
  return (
    <div className="contacts-list-header">
      <h1>Contacts</h1>

      <input
        className="search"
        type="text"
        name="search"
        id="search"
        placeholder="Search contact..."
        onChange={(e) => searchValueChanged(e.target.value)}
      />
    </div>
  );
}

export default ContactsListHeader;

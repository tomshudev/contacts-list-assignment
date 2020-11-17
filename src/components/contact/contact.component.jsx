import React from "react";

import "./contact.styles.scss";

function Contact({ contact }) {
  return (
    <div className="contact">
      <img className="image" src={contact.profile_image} alt={contact.name} />
      <img
        className="icon"
        src={contact.icon}
        alt={`${contact.name}-icon    `}
      />

      <div className="information">
        <div className="name">{contact.name}</div>
        <div className="job">{`${contact.job} | ${contact.company_name}`}</div>
      </div>

      <br />
      <br />
      <div className="hidden-info">
        <div className="phone">Phone number: {contact.phone}</div>
        <div className="email">{contact.email}</div>
      </div>
    </div>
  );
}

export default Contact;

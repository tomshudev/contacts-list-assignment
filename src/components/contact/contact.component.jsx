import React from 'react';

import './contact.styles.scss';

function Contact({ contact }) {
    return (
        <h1>{contact.name}</h1>
    )
}

export default Contact;
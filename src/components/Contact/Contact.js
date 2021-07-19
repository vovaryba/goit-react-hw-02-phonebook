import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <li>
      <span>{name}:</span>
      <span>{number}</span>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;

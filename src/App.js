import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactsList from './components/ContactsList';
import Form from './components/Form';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: uuidv4(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: uuidv4(), name: 'Hermione Kline', number: '443-89-12' },
      { id: uuidv4(), name: 'Eden Clements', number: '645-17-79' },
      { id: uuidv4(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    const contact = {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <h2>Phonebook</h2>
        <Form onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList
          contacts={contacts}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;

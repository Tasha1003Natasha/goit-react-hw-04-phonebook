import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import '../index.css';

const CONTACTS_KEY = 'contacts-key';

export const App = () => {
  // const [contacts, setContacts] = useState ([
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(CONTACTS_KEY)) ?? [];
  });

  useEffect(() => {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState('');

  const formSubmitHendler = contact => {
    const searchName = contacts.find(item => item.name === contact.name);
    if (searchName) {
      alert(`${contact.name}  is already in contacts`);
    } else {
      setContacts(prevContacts => [...prevContacts, contact]);
    }
  };

  const formSubmitFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getSubmitContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleDelete = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  return (
    <>
      <h1 className="title">Phonebook</h1>
      <ContactForm onSubmit={formSubmitHendler} />

      <h2 className="title">Contacts</h2>
      <Filter filter={filter} formSubmitFilter={formSubmitFilter} />
      <ContactList
        contactList={getSubmitContacts()}
        handleDelete={handleDelete}
      />
    </>
  );
};

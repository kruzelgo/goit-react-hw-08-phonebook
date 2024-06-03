import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../../Redux/contactsOperations';
import css from './Contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactsContainer}>
      <form onSubmit={handleSubmit} className={css.formContacts}>
        <label className={css.labelContacts}>
          Name
          <input
            className={css.inputContacts}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </label>
        <label className={css.labelContacts}>
          Number
          <input
            className={css.inputContacts}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className={css.submitButton}>
          Add Contact
        </button>
      </form>

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <ul className={css.contactList}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={css.contactItem}>
            <p>
              {name}: {number}
            </p>
            <button
              onClick={() => handleDelete(id)}
              className={css.deleteButton}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;

import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

// export const addContact = newContact => {
//   return {
//     type: 'contacts/addContact',
//     payload: {
//       id: nanoid(),
//       name: newContact.name,
//       number: newContact.number,
//     },
//   };
// };

export const addContact = createAction('contacts/addContact', newContact => {
  return {
    payload: {
      id: nanoid(),
      name: newContact.name,
      number: newContact.number,
    },
  };
});

export const deleteContact = createAction(
  'contacts/deleteContact',
  contactId => {
    return { payload: contactId };
  }
);

// export const deleteContact = contactId => {
//   return {
//     type: 'contacts/deleteContact',
//     payload: contactId,
//   };
// };

export const setFilter = value => {
  return {
    type: 'filter/setFilter',
    payload: value,
  };
};

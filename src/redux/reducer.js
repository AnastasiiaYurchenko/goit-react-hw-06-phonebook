// import { combineReducers } from 'redux';
import { addContact, deleteContact } from './actions';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

// const filterInitialState = '';

export const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case addContact.type: {
      return [...state, action.payload];

      // state.contacts.map(contact => {
      //   if (contact.name === action.payload.name) {
      //     return window.alert(
      //       `${action.payload.name} is allready in contacts`
      //     );
      //   }
      //   return action.payload;
      // }),
      // ],
      // };
    }
    case deleteContact.type: {
      return state.filter(contact => contact.id !== action.payload);
      // {
      //   ...state,
      //   contacts: state.contacts.filter(
      //     contact => contact.id !== action.payload
      //   ),
      // }
    }
    default:
      return state;
  }
};

// export const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   // filter: filterReducer,
// });

// export const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContact': {
//       return {
//         ...state,
//         contacts: [
//           ...state.contacts,
//           action.payload,
//           // state.contacts.map(contact => {
//           //   if (contact.name === action.payload.name) {
//           //     return window.alert(
//           //       `${action.payload.name} is allready in contacts`
//           //     );
//           //   }
//           //   return action.payload;
//           // }),
//         ],
//       };
//     }
//     case 'contacts/deleteContact': {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     }
//     default:
//       return state;
//   }
// };

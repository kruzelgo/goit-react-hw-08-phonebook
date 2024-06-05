import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import contactsReducer from './contactsSlice';
import authReducer from './authSlice';
const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: contactsReducer,
    auth: authReducer,
  },
});

export default store;

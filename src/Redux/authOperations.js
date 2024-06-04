// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

// export const register = createAsyncThunk(
//   'auth/register',
//   async (credentials, thunkAPI) => {
//     try {
//       const response = await axios.post('/users/signup', credentials);
//       setAuthHeader(response.data.token);
//       return response.data;
//     } catch (error) {
//       toast.error('Registration failed. Please try again.');
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

// export const logIn = createAsyncThunk(
//   'auth/login',
//   async (credentials, thunkAPI) => {
//     try {
//       const response = await axios.post('/users/login', credentials);
//       setAuthHeader(response.data.token);
//       return response.data;
//     } catch (error) {
//       toast.error('Incorrect email or password');
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

// export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//   try {
//     await axios.post('/users/logout');
//     clearAuthHeader();
//     return {};
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.response.data);
//   }
// });

// export const fetchCurrentUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }

//     try {
//       setAuthHeader(persistedToken);
//       const response = await axios.get('/users/current');
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        'Registration failed. Please try again.';
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message || 'Incorrect email or password';
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
    return {};
  } catch (error) {
    const message =
      error.response?.data?.message || 'Failed to log out. Please try again.';
    toast.error(message);
    return thunkAPI.rejectWithValue(message);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      const message = 'Unable to fetch user. No token found.';
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }

    try {
      setAuthHeader(persistedToken);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        'Failed to fetch user. Please try again.';
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

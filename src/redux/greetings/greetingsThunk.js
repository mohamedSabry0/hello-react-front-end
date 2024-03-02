import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:3001/api/v1/greetings/random';

const fetchGreetings = createAsyncThunk('greetings/fetchGreetings', async () => {
  const response = await axios.get(URL)
    .then(({ data }) => data).catch((error) => {
      throw new Error(`HTTP error! Error: ${error}`);
    });

  return response;
});

export default fetchGreetings;

import axios from 'axios';

export const setRandomGreeting = (greeting) => ({
  type: 'GREETING',
  payload: greeting,
});

export const getRandomGreeting = () => (dispatch) => {
  axios.get('/random_greeting')
    .then((response) => {
      dispatch(setRandomGreeting(response.data.greeting));
    })
    .catch((error) => error);
};

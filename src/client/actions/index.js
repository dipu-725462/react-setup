import axios from 'axios';

const fetchUsersUrl = "https://jsonplaceholder.typicode.com/users";

export const FETCH_USERS = 'FETCH_USERS';

const updateUsers = (payload) => {
  return {
    type : FETCH_USERS,
    payload
  }
}

export const fetchUsers = () => async dispatch => {
  const res = await axios.get(fetchUsersUrl);
  dispatch(updateUsers(res));
}

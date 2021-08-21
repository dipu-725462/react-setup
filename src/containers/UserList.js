import { connect } from "react-redux";
import { fetchUsers } from "../client/actions";

import UserList from "../client/components/UserList";

const mapStateToProps = (state) => {
  const users = state.listingReducer;

  return {
    users
  }
}

const mapDispatchToProps = (dispatch) => {
  const fetchUserData = () => {
    dispatch(fetchUsers())
  }

  return {
    fetchUserData
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);



const loadUserList = (store) => {
  return store.dispatch(fetchUsers());
}

export {
  loadUserList
};

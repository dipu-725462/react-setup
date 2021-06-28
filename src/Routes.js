import HomePage from './client/components/Home';
import UserList, { loadUserList } from './containers/UserList';

const route_config  = [
  {
    path: '/',
    component : HomePage,
    exact : true
  },
  {
    path: '/users',
    component : UserList,
    exact : true,
    loadData: loadUserList
  }
];

export default route_config;

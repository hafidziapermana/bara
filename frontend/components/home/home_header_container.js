import { connect } from 'react-redux';

import { login, logout } from '../../actions/session_actions';
import HomeHeader from './home_header';

const mapStateToProps = ({ currentUser }) => ({
  currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  demoLogin: () => dispatch(login({username: 'guest', password: 'password'}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeHeader);
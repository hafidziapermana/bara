import React from 'react';
import {
  Link
} from 'react-router-dom';

import SearchBar from './search_bar';
import BusinessHeaderLinks from './business_links';
import DropdownContainer from './dropdown_container';

export default class BusinessHeader extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      showDropdown: false,
    };

    this.toggleDropdown = this.toggleDropdown.bind( this );
    this.handleLogout = this.handleLogout.bind( this );
    this.closeDropdown = this.closeDropdown.bind( this );
  }

  toggleDropdown() {
    this.setState( prevState => ( {
      showDropdown: !prevState.showDropdown
    } ) );
  }

  handleLogout() {
    this.closeDropdown();
    this.props.logout();
  }

  closeDropdown() {
    this.setState( () => ( {
      showDropdown: false,
    } ) );
  }

  avatarOrSignUp() {
    let {
      currentUser,
      demoLogin,
    } = this.props;

    return currentUser ? (
      <div className='home-bar-right'>
        <div onClick={this.toggleDropdown} className='dropdown' >
          <img className='home-avatar' src={currentUser.avatar_url} />
          <i className='fa fa-caret-down'
            id='down-arrow' aria-hidden="true"></i>
        </div>
        <DropdownContainer
          currentUser={currentUser}
          logout={this.handleLogout}
          toggleDropdown={this.toggleDropdown}
          showDropdown={this.state.showDropdown}
        />
      </div>
    ) : (
      <div className='business-signup'>
        <Link to="/signup">Sign up</Link>
      </div>
    );
  }

  login() {
    return this.props.currentUser ? null : (
      <div className='business-header-row2-right'>
        <div onClick={this.props.demoLogin} className='business-demo'>
          Demo Login
        </div>
        <div className="business-login">
          <Link to="/login">Log In</Link>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className='business-header'>
        <div className='business-header-row1-wrapper' >
          <div className='business-header-row1'>
            <div className='business-logo'>
              <Link to="/">
                <img src={window.staticImages.headerLogo} />
              </Link>
            </div>
            <div className='business-search'>
              <SearchBar />
            </div>
            {this.avatarOrSignUp()}
          </div>
        </div>

        <div className='business-header-row2-wrapper' >
          <div className='business-header-row2'>
            <BusinessHeaderLinks />
            {this.login()}
          </div>
        </div>
      </div>
    );
  }
}
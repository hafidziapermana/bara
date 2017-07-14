import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './search_bar';
import BusinessLinks from './business_links';
import Dropdown from './dropdown';

class BusinessHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  avatarOrSignUp() {
    let {
      currentUser,
      toggleDropdown,
      demoLogin,
      logout,
      showDropdown
    } = this.props;
    let dropdownBox;
    if (showDropdown) {
      dropdownBox =
      <Dropdown
        currentUser={currentUser}
        logout={logout}
        toggleDropdown={toggleDropdown} />;
    } else {
      dropdownBox = null;
    }

    if (currentUser) {
      return (
        <div className='home-bar-right'>
          <div onClick={toggleDropdown} className='dropdown' >
            <img className='home-avatar' src={currentUser.avatar_url} />
            <img className='down-icon' src={window.staticImages.downIcon} />
          </div>
          {dropdownBox}
        </div>
      );
    } else {
      return (
        <div className='business-signup'>
          <Link to="/signup">Sign up</Link>
        </div>
      );
    }
  }

  login() {
    if (this.props.currentUser) {
      return <div></div>;
    } else {
      return (
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
  }

  render() {
    const queryString = require('query-string');
    const parsed = queryString.parse(this.props.location.search);
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
              <SearchBar parsed={parsed} />
            </div>
            {this.avatarOrSignUp()}
          </div>
        </div>

        <div className='business-header-row2-wrapper' >
          <div className='business-header-row2'>
            <BusinessLinks />
            {this.login()}
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessHeader;

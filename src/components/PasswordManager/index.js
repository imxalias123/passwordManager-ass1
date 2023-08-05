import {Component} from 'react'
import './index.css'

class PasswordManager extends Component {
  render() {
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />
        <div className="addNewPassword-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password"
            className="sm-img-1"
          />
          <div className="card-container">
            <h1 className="heading">Add New Password</h1>
            <form onSubmit={this.onAddPassword}>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="input-logo"
                />
                <input
                  className="input"
                  type="text"
                  onChange={this.onChangeWebsite}
                  value=""
                  placeholder="Enter Website"
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="input-logo"
                />
                <input
                  className="input"
                  type="text"
                  onChange={this.onChangeUsername}
                  value=""
                  placeholder="Enter Username"
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="input-logo"
                />
                <input
                  className="input"
                  type="text"
                  onChange={this.onChangePassword}
                  value=""
                  placeholder="Enter Password"
                />
              </div>

              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password"
            className="lg-img-1"
          />
        </div>
        <div className="passwordList-container">
          <div className="passwordSearch-count">
            <div className="passwordCount">
              <h1 className="password-heading">Your Passwords</h1>
              <p className="count">c</p>
            </div>
            <div className="search-element">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-img"
              />
              <input
                type="search"
                placeholder="Search"
                className="search-bar"
              />
            </div>
          </div>

          <hr className="hr-line" />
          <div className="show-password">
            <input type="checkbox" id="check" className="checkbox" />
            <label htmlFor="check" className="checkbox-label">
              Show Passwords
            </label>
          </div>
        </div>
      </div>
    )
  }
}
export default PasswordManager

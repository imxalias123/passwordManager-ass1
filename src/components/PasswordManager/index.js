import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

const colors = ['a', 'b', 'c', 'd', 'e', 'f']

class PasswordManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    list: [],
    isFilled: false,
    isShow: false,
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onAddPassword = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const initialValue = website[0].toUpperCase()
    const colorClassName = colors[Math.floor(Math.random() * 6)]

    const newValues = {
      id: uuidv4(),
      websiteName: website,
      userName: username,
      Password: password,
      initial: initialValue,
      colorClass: colorClassName,
    }

    this.setState(prevState => ({
      list: [...prevState.list, newValues],
      website: '',
      username: '',
      password: '',
      isFilled: true,
      searchInput: '',
    }))
  }

  onChangeSearchList = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeShowPassword = event => {
    if (event.target.checked) {
      this.setState({isShow: true})
    } else {
      this.setState({isShow: false})
    }
  }

  onDelete = () => {}

  render() {
    const {
      website,
      username,
      password,
      isShow,
      list,
      isFilled,
      searchInput,
    } = this.state

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
                  value={website}
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
                  value={username}
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
                  value={password}
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
                onChange={this.onChangeSearchList}
              />
            </div>
          </div>

          <hr className="hr-line" />
          <div className="show-password">
            <input
              type="checkbox"
              id="check"
              className="checkbox"
              onChange={this.onChangeShowPassword}
            />
            <label htmlFor="check" className="checkbox-label">
              Show Passwords
            </label>
          </div>
          {!isFilled && (
            <div className="no-password-flex">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwords"
              />
              <p className="no-pass-text">No Passwords</p>
            </div>
          )}
          {isFilled && (
            <ul className="stored-password">
              {list.map(eachValue => (
                <li className="each-password-container">
                  <p className={`initial ${eachValue.colorClass}`}>
                    {eachValue.initial}
                  </p>
                  <div>
                    <p className="web-text">{website}</p>
                    <p className="username-text">{username}</p>
                    {!isShow && (
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                        alt="stars"
                        className="stars"
                      />
                    )}
                    {isShow && (
                      <p className="password-text">{eachValue.password}</p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={this.onDelete}
                    className="delete"
                    data-testid="delete"
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                      alt="delete"
                      className="del-img"
                    />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default PasswordManager

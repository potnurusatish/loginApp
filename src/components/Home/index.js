import {Component} from 'react'

import Logout from '../Logout'
import Login from '../Login'

class Home extends Component {
  state = {isLoggedIn: false}

  renderAuthButton = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      return <Logout />
    }
    return <Login />
  }

  render() {
    return <div>{this.renderAuthButton()}</div>
  }
}

export default Home

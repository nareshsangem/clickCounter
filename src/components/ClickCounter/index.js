import {Components} from 'react'
import './index.css'
class ClickCounter extends Components {
  state = {count: 0}
  onClickMe = () => {
    this.setState(prevState => ({count: prevState + 1}))
  }
  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">The Button has been clicked {count} times</h1>
        <p>Click the button to increase the count! </p>
        <button className="button" onClick={this.onClickMe}>
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter

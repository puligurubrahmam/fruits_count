import './index.css'
import {Component} from 'react'
class FruitsCounter extends Component {
  state = {count: 0, count1: 0}
  mango = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }
  banana = () => {
    this.setState(prevState => {
      return {count1: prevState.count1 + 1}
    })
  }
  render() {
    return (
      <div className="bg">
        <div className="cardbg">
          <h1 className="head">
            Bob ate <span>{this.state.count}</span> mangoes{' '}
            <span>{this.state.count1}</span> bananas
          </h1>
          <div className="card">
            <div className="card1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img"
              />
              <button className="btn" onClick={this.mango}>
                Eat Mango
              </button>
            </div>
            <div className="card1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img"
              />
              <button className="btn" onClick={this.banana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter

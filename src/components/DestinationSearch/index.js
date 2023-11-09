// Write your code here

import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {word: ''}

  searchKeyword = event => {
    this.setState({
      word: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {word} = this.state
    const searchList = destinationsList.filter(each =>
      each.name.toLowerCase().includes(word.toLowerCase()),
    )

    return (
      <div className="container">
        <h1>Destination Search</h1>
        <div className="input-container">
          <input
            className="inputElement"
            type="search"
            onChange={this.searchKeyword}
            placeholder="Search"
          />
          <img
            className="image"
            alt="search icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          />
        </div>
        <ul className="list-container">
          {searchList.map(eachItem => (
            <DestinationItem searchList={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch

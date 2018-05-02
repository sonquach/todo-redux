import React, {Component} from 'react'

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: this.props.item
    }
  }

  removeItemHandler () {
    this.props.removeItem(this.props.index)
  }

  render () {
    return (
      <li key={this.state.item.id} onMouseDown={this.removeItemHandler.bind(this)}>
        {this.state.item.text}
      </li>
    )
  }
}

export default Item
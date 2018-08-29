import React, {Component} from 'react';
import {connect} from 'react-redux'
import {addToDo} from 'store/modules/action-creators'

class AddToDoModal extends Component {

  state = {
    text: ''
  }

  handleClick = () => {
    this.setState({text: ''})
    this.props.dispatch(addToDo(this.state.text))
  }

  handleInput = (e) => this.setState({text: e.target.value})

  render() {
    const {toDos} = this.props
    const {text} = this.state
    return (
      <div className='AddToDoModal'>
        <input
          onChange={this.handleInput}
          value={text}
          type="text"
        />
        <div className='button' onClick={this.handleClick}>
          ADD TO DO
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  toDos: state.data.toDos
}))(AddToDoModal)

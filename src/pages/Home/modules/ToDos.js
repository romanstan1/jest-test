import React, {Component} from 'react';
import {connect} from 'react-redux'
import {deleteToDo} from 'store/modules/action-creators'

const ListItem = ({item, handleDelete}) =>
  <li>
    <span>
      {item.task}
       {/* - {item.done? 'Done' : 'Not done'} */}
    </span>
    <div
      className="button delete"
      onClick={handleDelete}
      data-id={item.id}
      >
      Delete
    </div>
  </li>

class ToDos extends Component {
  handleDelete = (e) => {
    this.props.dispatch(deleteToDo(e.target.dataset.id))
  }
  render() {
    const {toDos} = this.props
    return (
      <div className='ToDos'>
        <ul>
          {
            toDos.map((item, i) =>
              <ListItem
                handleDelete={this.handleDelete}
                key={item.task + i}
                item={item}/>
            )
          }
        </ul>
      </div>
    )
  }
}

export default connect(state => ({
  toDos: state.data.toDos,
}))(ToDos)

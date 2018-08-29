import uuidv1 from 'uuid/v1'

import {ADD_TO_DO} from './actions'
import {DELETE_TO_DO} from './actions'

export const addToDo = (text) => {
  return dispatch => dispatch({
    type: ADD_TO_DO,
    payload: {
      id: uuidv1(),
      task: text.length? text: 'Default text', 
      done: false
    }
  })
}

export const deleteToDo = (id) => {
  return dispatch => dispatch({
    type: DELETE_TO_DO,
    payload: id
  })
}

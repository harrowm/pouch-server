import { combineReducers } from 'redux'
import { REQUEST_POSTS, RECEIVE_POSTS } from './actions'

function postsBySubreddit(state = {isFetching:false, items: []}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.posts
      })
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        items: []
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  postsBySubreddit
})

export default rootReducer

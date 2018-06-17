import { combineReducers } from 'redux'
import { REQUEST_VEHICLES, FILTER } from '../actions/actions'

function vehicles (state = { }, action: any) {
  console.log('vehicles reducer:', state, action)
  switch (action.type) {
    case REQUEST_VEHICLES:
      // could be simplified with spread operator; it's explicit to demonstrate what's happening:
      switch (action.status) {
        case 'pending':
          return { status: action.status }
        case 'success':
          return { status: action.status, vehicles: action.vehicles }
        case 'error':
          return { status: action.status, error: action.error }
        default:
          return state
      }
    default:
      return state
  }
}

function filter (state = '', action: any) {
  console.log('filter reducer:', action)
  switch (action.type) {
    case FILTER:
      return action.filter
    default:
      return state
  }
}

const rootReducer = combineReducers({
  filter,
  vehicles
})

export default rootReducer

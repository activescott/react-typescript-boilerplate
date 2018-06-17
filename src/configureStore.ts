import { createStore, applyMiddleware, Action, Middleware } from 'redux'
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers/reducers'

const loggerMiddleware = createLogger()

export default function configureStore (preloadedState?: any) {
  return createStore (
    rootReducer,
    preloadedState,
    applyMiddleware<ThunkDispatch<any, any, Action<string>>, Middleware, any>(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}

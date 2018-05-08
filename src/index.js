import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import { doSaga } from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(doSaga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
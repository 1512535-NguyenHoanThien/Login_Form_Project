import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { homeReducer } from './reducers'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { BrowserRouter as Router } from 'react-router-dom'
import { loadMe } from 'actions/appActions'

const store = createStore(
  homeReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

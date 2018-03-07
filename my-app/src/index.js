import React from 'react'

import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App.jsx'
import {todoApp,LogApp} from './reducers/reducers'


let store1=todoApp;
let store2=LogApp;
let store=createStore(store1,store2)
let rootElement = document.getElementById('app')

render(
   <Provider store={store}>
      <App />
   </Provider>,
	
   rootElement
)

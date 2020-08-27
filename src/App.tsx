import React, { FunctionComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from "./router"
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;

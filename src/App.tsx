import React, { useState, FunctionComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from "./router"
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import { store, persistor, sagaMiddleware, history } from './redux/store/store';
import sagas from './redux/sagas';


sagaMiddleware.run(sagas);

const App: FunctionComponent = () => {
  const [rehydrated, setRehydrated] = useState(false);
  const onRehydate = async () => {
    setRehydrated(true);
  };
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor(onRehydate)}>
        <ConnectedRouter history={history}>
          <AppRouter />
        </ConnectedRouter>
      </PersistGate>
      <AppRouter />
    </Provider>
  );
}

export default App;

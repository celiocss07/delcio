import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import AdminRoutes from './dashboard/routesAdmin'
import GlobalStyles from './styles/global';

import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import store from './store';

function App() {
  return (
    <Provider store={store}>

   
    <BrowserRouter>
    <AdminRoutes />
        
        <Routes />
        
        
        
    </BrowserRouter>

    </Provider>
  );
}

export default App;

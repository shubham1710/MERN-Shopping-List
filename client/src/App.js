import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import { Provider } from 'react-redux';
import store from './store';
import ItemModal from './components/ItemModal';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar/>
        <ItemModal/>
        <ShoppingList/>
      </div>
    </Provider>
  );
}

export default App;

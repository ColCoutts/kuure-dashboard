import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/header-component';
import Dashboard from './pages/dashboard/collabs-component';


function App() {
  return (
    <div className="App">
    <Header />
    <Switch>
      <Route exact path='/' component={Dashboard}/>
    </Switch>
    </div>
  );
}

export default App;

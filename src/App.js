import React from 'react';
import './App.css';
import { Route ,Switch } from 'react-router-dom';
import Welcome from './welcome/Welcome';


/* import NotFound from "./component/notFound/NotFound"; */

function App() {
return(
  
  <Switch>
  <Route
    exact
    path="/"
    render={(Props) => <Welcome {...Props} name="Arjun" />} 
    
  />
   <Route
    exact
    path="/welcome/:name"
    component={Welcome}
    
  />
  
  
  </Switch>     
)
};

export default App;

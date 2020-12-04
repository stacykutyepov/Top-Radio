import React from 'react';
import NavBar from './components/shared/navbar';
import Main from './components/main';
import ArtistInfo from './components/artist'
import Search from './components/search'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/search" component={Search} />
        <Route path="/artist/:id" component={ArtistInfo} />
      </Switch>
    </div>
  );
}

export default App;

import './App.css';
import Login from './login';
import Dashboard from './dashboard';
import CreateAkun from './createakun';
import AddSaldo from './addSaldo';
import DeleteAkun from './deleteakun';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch,Link, Redirect } from 'react-router-dom';

// function App() {
//   return (
//    <Login/>
//   );
// }
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      isUserAuthenticated: true
    };
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                    return (
                      // this.state.isUserAuthenticated ?
                      <Redirect to="/Login" />
                    )
                }}
              />
                <Route path="/login" exact component={Login} />
                {/* <Route
                    path="/receipts/list"
                    exact
                    component={ChocoList}
                /> */}
                <Route
                    path="/user/ceksaldo"
                    exact
                    component={Dashboard}
                />
                <Route
                    path="/user/createaccount"
                    exact
                    component={CreateAkun}
                />
                <Route
                    path="/user/addSaldo"
                    exact
                    component={AddSaldo}
                />
                <Route
                    path="/user/deleteaccount"
                    exact
                    component={DeleteAkun}
                />
                {/* <Route
                    path="/receipts"
                    exact
                    component={DaftarBahan}
                />
                <Route
                    path="/num"
                    exact
                    component={Client}
                />
                <Route
                    path="/beli"
                    exact
                    component={DaftarBahan}
                /> */}


            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}


export default App;

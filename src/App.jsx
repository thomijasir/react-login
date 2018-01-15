import React, { Component } from 'react';
import { BrowserRouter, Route, hasHistory, browserHistory } from 'react-router-dom';
import Login from './pages/Login.jsx';

class App extends Component {

    render() {
        return (
            <BrowserRouter history={browserHistory}>
                <div className="App">
                    <Route exact path="/" component={Login} />
                    <Route path="/details" component={Login} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

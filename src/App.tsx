import React from 'react';
import Homepage from "./pages/homepage/Homepage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ProductPage from "./pages/homepage/ProductPage";

const App: React.FC = (): JSX.Element => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/shop/hats" component={ProductPage}/>
            </Switch>
        </Router>
    );
}

export default App;

import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Barrels from './Barrels';
import About from './About';

const Main = () => (
    <main>
    <Switch>
    <Route exact path= '/' component={Barrels} />
    <Route exact path= '/about' component={About} />
    </Switch>
    </main>
    )
    export default Main;
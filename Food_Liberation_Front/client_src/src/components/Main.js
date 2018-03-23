import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Barrels from './Barrels';
import About from './About';
import BarrelDetails from './BarrelDetails';

const Main = () => (
    <main>
    <Switch>
    <Route exact path= '/' component={Barrels} />
    <Route exact path= '/about' component={About} />
    <Route exact path= '/barrels/:id' component={BarrelDetails} />
    </Switch>
    </main>
    )

export default Main;
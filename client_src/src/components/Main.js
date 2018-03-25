import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Barrels from './Barrels';
import About from './About';
import BarrelDetails from './BarrelDetails';
import AddBarrel from './AddBarrel';
import BarrelEdit from './BarrelEdit';

const Main = () => (
    <main className="green">
    <Switch>
    <Route exact path= '/' component={Barrels} />
    <Route exact path= '/about' component={About} />
    <Route exact path= '/barrels/add' component={AddBarrel} />
    <Route exact path= '/barrels/edit/:id' component={BarrelEdit} />
    <Route exact path= '/barrels/:id' component={BarrelDetails} />
    </Switch>
    </main>
    )

export default Main;
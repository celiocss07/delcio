import React from 'react';
import  { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Sobre from './pages/sobre';
import Contacto from './pages/contacto';



export default function Routes() {

    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cart"  component={Cart} />
            <Route path="/sobre"  component={Sobre} />
            <Route path="/contacto"  component={Contacto} />
        </Switch>
    )
}
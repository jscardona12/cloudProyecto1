/**
 * Created by Juan on 19/08/2017.
 */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import ListaConcursos from './ListaConcursos.jsx'
import ListaVideos from './ListaVideos.jsx'


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/concursos' component={ListaConcursos}/>
            {<Route path='/:url' component={ListaVideos}/>}
    </Switch>
)

export default Main
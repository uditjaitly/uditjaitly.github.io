import React, {useState} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Experience from '../pages/Experience/Experience'
import About from '../pages/About/About'
import Skills from '../pages/Skills/Skills'
import MyNavbar from '../components/Navbar/Navbar'
import Project from '../pages/Project/Project'
import Contact from '../pages/Contact/Contact'
const Router = () =>{

    
    return(
        <BrowserRouter>
            
            <Switch>
                <Route path="/" exact={true} component={About}></Route>
                <Route path="/skills" exact={true} component={Skills}></Route>
                <Route path="/experience" exact={true} component={Experience}></Route>
                <Route path="/projects" exact={true} component={Project}></Route>
                <Route path="/contact" exact={true} component={Contact}></Route>

            </Switch>
        
        </BrowserRouter>

    )
}

export default Router
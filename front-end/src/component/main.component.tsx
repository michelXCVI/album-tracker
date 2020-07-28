import React, { Fragment } from 'react';
import { LoginComponent } from './pages/login.component/login.component';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { SignupComponent } from './pages/signup.component/signup.component';
import { NavbarComponent } from './navbar.component';
import { HomeComponent } from './pages/home.component/home.component';

export const MainComponent: React.FC = () =>{
    return <div>
        <BrowserRouter>
            <main>
                <Switch>
                    <Route exact path="/">
                        <LoginComponent />
                    </Route>
                        <Route path="/signup">
                            <SignupComponent />
                        </Route>
                        <Fragment>
                            <NavbarComponent />
                            <Route exact path ='/home'>
                                <HomeComponent />
                            </Route>
                        </Fragment>
                </Switch>
            </main>
        </BrowserRouter>
    </div>
}
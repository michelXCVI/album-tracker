import React, { Fragment } from 'react';
import { LoginComponent } from './pages/login.component/login.component';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { SignupComponent } from './pages/signup.component/signup.component';
import { NavbarComponent } from './navbar.component';

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
                            <Route exact path ='/navbar'>
                                
                            </Route>
                        </Fragment>
                </Switch>
            </main>
        </BrowserRouter>
    </div>
}
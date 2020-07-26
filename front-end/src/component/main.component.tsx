import React from 'react';
import { LoginComponent } from './pages/login.component/login.component';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { SignupComponent } from './pages/signup.component/signup.component';

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
                </Switch>
            </main>
        </BrowserRouter>
    </div>
}
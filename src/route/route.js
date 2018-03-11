import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import MainPage from '../mainpage/index'

const router = (
    <BrowserRouter>
        <MainPage>
            <Switch>
              <Route path="/" component={MainPage}/>
            </Switch>
        </MainPage>
    </BrowserRouter>
)
export default router;

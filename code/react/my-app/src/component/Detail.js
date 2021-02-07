import React from 'react';
import Home from './Home';
import {BrowserRouter as Router,Route,NavLink}  from 'react-router-dom';

export default class Detail extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <main>
                <h1>这是详情页面</h1>
            	
                <Home></Home>
                <br/>
                <br/>
                
                <NavLink to='/Prolist/123'>列表页面</NavLink>

            </main>
        )
    }
}
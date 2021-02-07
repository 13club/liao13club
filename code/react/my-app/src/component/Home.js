import React from 'react'
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom'

export default class Home extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <main>
                <NavLink to='/My'>我的</NavLink>
                <br/>
                <br/>
                <NavLink to='/Buy'>购物车</NavLink>
                <br/>
                <br/>
                <NavLink to='/Detail'>详情页</NavLink>
            </main>
        )
    }
}
import React from 'react';
import Home from './Home';

export default class Prolist extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <main>
                 <h1>这是商品页面{this.props.match.params.id}</h1>
            </main>
        )
    }
}
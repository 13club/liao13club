import React from 'react';

//fetch 和 axios 功能类似
import fetch from 'cross-fetch';
import axios from 'axios';

import List from './List';


export default class Date extends React.Component{
    constructor(props){
        super();
        this.state = {
            msg: 0,
            list: []
        }
    }

    change = ()=>{
        this.setState({
            msg: ++this.state.msg
        })
    }

    componentWillMount(){
        // //fetch传输数据
        // fetch('./data/my.json')
        // .then((res)=>{
        //     if(res.status >= 400){
        //         throw new Error('Bad response from server')
        //     }
        //     return res.json();
        // })
        // .then(user=>{
        //     console.log('user')
        //     console.log(user)
        // })
        // .catch(err=>{
        //     console.error(err);
        // })


        // axios传输数据
        axios.get('./data/my.json').then((response)=> {
            console.log(response.data.result); //接口返回数据
            
            //新增，将获取的值存入List
            this.setState({
                list: response.data.result
            })
        }).catch(function (error) {
            console.log(error);//捕获异常数据
        })

    }



    render(){
        console.log(this.props)
        return (
            <div>
                <h1>这是在生命周期请求 数据</h1>
                <h2>这是props数据{this.props.msg}</h2>
                <h3>这是生命周期{this.state.msg}</h3>
                <button onClick={this.change}>数据{this.state.msg}</button>
                {
                    //循环List数组
                    this.state.list.map((item,index)=>{
                    	return <List {...item} key={index}></List>
                    })
                }
            </div>
        )
    }

}
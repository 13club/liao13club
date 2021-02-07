import React from 'react'
import propTypes from 'prop-types';
export default class List extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            msg: 'hello list'
        }
    }

    //设置默认值
    static defaultProps = {
        hobby: '跳舞'
    }

    //propsTypes限制传输类型
    static propTypes = {
        hobby: propTypes.number
    }

    render(){
        return(
            <div>
                <img src={this.props.pic}></img>
                <p>{this.props.title}</p>
            </div>
        )
    }

}
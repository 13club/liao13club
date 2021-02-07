import React from 'react';
import propTypes from 'prop-types';

class Child extends React.Component{
    constructor(){
        super();
        this.state = {
            msg: 'hello react'
        }
    }

    //设置hobby的默认值，如果不传递值就以默认值为准，否则以传递值为准
    static defaultProps = {
        hobby:'跳舞'
    }

    // //2.propTypes限制传递的数据类型，如果不符合会警告处理，不会影响代码执行
    // static propTypes={
    //     hobby:propTypes.number
    //     //如果在APP.js里面传的是hobby={this.state.stu.age}，而不是'唱歌'就不会报警告了
    // }
    
    componentWillMount(){
        console.log('componentWillMount')
    }
    componentDidMount(){
        console.log('componentDidMount')
    }




    render(){
        return <div>
            <h1>这是子组件{this.state.msg}</h1>
            <h2>{this.props.hobby}</h2>
        </div>
    }
}

export default Child;
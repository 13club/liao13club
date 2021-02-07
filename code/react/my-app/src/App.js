import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'

import Child from './component/Child'
import Date from './component/Date'

import Home from './component/Home';
import My from './component/My';
import Detail from './component/Detail';
import Buy from './component/Buy';
import Prolist from './component/Prolist';



class App extends React.Component{
  constructor(){
    super();
    this.state = {
      flag: true,
      msg: 'hello react',
      stu: {
        name: 'sz',
        age:12
      }
    }
  }

  render(){
    return (
      <main>
        {/* <Child {...this.state.stu} hobby="唱歌"></Child>

        <Date></Date> */}

        {
            // 配置路线 exact精准匹配（会跳转到一个新的页面）
            // Route类似于之前的配置路线，内容直接渲染在此处，Route外面需要包裹Router
        }
        {
            <Router>
                <Route path='/' component={Home}></Route>

                <Route path='/My' component={My}></Route>
                <Route path='/Detail' component={Detail}></Route>
                <Route path='/Buy' component={Buy}></Route>
                <Route path='/Prolist/:id' component={Prolist}></Route>
            </Router>
        }
      </main>
    )
  }

}


function App0() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <h1>hello world</h1>
      
      <Child></Child>

    </div>
  );
}

export default App;

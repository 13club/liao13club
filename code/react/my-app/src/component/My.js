import React from 'react';
import Home from './Home';
import { ConfigProvider, DatePicker, message,Button} from 'antd';
import '../../node_modules/antd/dist/antd.css';
// import { Button } from 'antd';
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
} from '@ant-design/icons';

import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons';


export default class My extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
               <main>
                    <h1>这是我的页面</h1>
                    <Home></Home>

                    <div className="icons-list">
                        <HomeOutlined />
                        <SettingFilled />
                        <SmileOutlined />
                        <SyncOutlined spin />
                    <SmileOutlined rotate={180} />
                    <LoadingOutlined />
                    </div>

                    <Button type="primary">Primary Button</Button>
                    <Button>Default Button</Button>
                    <Button type="dashed">Dashed Button</Button>
                    <br />
                    <Button type="text">Text Button</Button>
                    <Button type="link">Link Button</Button>

                    <div className="icons-list">
                        <SmileTwoTone />
                        <HeartTwoTone twoToneColor="#eb2f96" />
                        <CheckCircleTwoTone twoToneColor="#52c41a" />
                    </div>

               </main>
            )

    }
}
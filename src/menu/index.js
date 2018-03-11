import React,{Component} from 'react';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import './index.css'
export default class Menu extends Component{
    render(){
        return (
            <div>
                <ul className="menu">
                    <li><Link to="/">推荐音乐</Link></li>
                    <li><Link to="/">热歌榜</Link></li>
                    <li><Link to="/">搜索</Link></li>
                </ul>
            </div>
        )
    }
}
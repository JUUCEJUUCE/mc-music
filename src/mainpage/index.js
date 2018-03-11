import React,{Component} from 'react';
import Menu from '../menu/index';
import Relist from './recommend-list/index.js';
import {getPersonalized,getNewSong} from '../data/data'
import './index.css';
import NewMusic from './newestmusic/index';
var Mock = require('mockjs')
export default class Mainpage extends Component{
    constructor(){
        super();
        
        this.state={
            obj:[],
            newSong:[]
        }
    }
    componentDidMount(){
        getPersonalized().then(res=>{
            if(res.data.code===200){
                this.setState({
                    obj:res.data.result
                })
            }
        });
        getNewSong().then(res=>{
            if(res.data.code===200){
                console.log( res.data.result)
                this.setState({
                    newSong:res.data.result
                })
            }
        });
        
    }
    render(){
        // let data = JSON.parse(this.state.obj.data.list)
        return (
            <div>
                <Menu/>
                <h1>推荐列表</h1>
                <Relist obj={this.state.obj}/>
                <h1>最新音乐</h1>
                <NewMusic newSong={this.state.newSong}/>
            </div>
        )
    }
}
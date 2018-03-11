import React,{Component}from 'react';
import './index.css'
export default class NewMusic extends Component{
    constructor(){
        super()
    }
    render(){
        let newSongList=this.props.newSong;
        return(
            <div>
                <ul>
                    {newSongList.map((item,index)=>{
                        return(
                            <li key={index}>
                                <a href="" className="asong">
                                    <div className="border-b clearfix">
                                        <div className="songfl">
                                            <p>{item.name}</p>
                                            <p>{item.song.artists[0].name}-{item.song.album.name}</p>
                                        </div>
                                        <div className="songfr">
                                            <span className="playButtom"></span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        )
                    })}

                </ul>
            </div>
        )
    }
}
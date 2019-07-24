import React, { Component } from 'react';
import moment from 'moment';
import aaa from './data.js';

moment.locale('zh_CN', {weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_')});

export default class DatePage extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            list:[]
        }
        this.getDate = this.getDate.bind(this);
    }
    componentDidMount(){
        this.getDate();
    }
    getDate(){
        const newData = aaa.map(item=>{
            const red = item.number.slice(1,17);
            const yell = item.number.slice(18,20);
            item.red = red.split(",");
            item.yell = yell;
            return item;
        })
        const list = [];
        let a = 0;
        for (let index = 0; index < 33; index++) {
            list.push(++a)
        }
        this.setState({
            data:newData,
            list
        })
    }
    render() {
        const {data,list} = this.state;
        return (
            <div style={{padding:'30px'}}>
                {
                    data.map((item,index)=>{
                        return(
                            <ul
                                style={{    
                                    listStyle: 'none',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    padding:0,
                                    margin:0
                                }}
                                key={index}
                            >
                                {
                                    list.map((a,b)=>{
                                        return(
                                            <li 
                                                style={{flex:1}}
                                                key={b}
                                            >
                                                <p
                                                    style={{
                                                        width:'100%',
                                                        border:'1px solid',
                                                        paddingBottom:'100%',
                                                        backgroundColor:item.red.some(r=>r==a) ? '#f45' : '#fff',
                                                        margin:0,
                                                        height:0
                                                    }}
                                                >{a}</p>
                                            </li>
                                        )
                                    })
                                }

                                {/* {
                                    item.red.map((red,i)=>{
                                        return(
                                            <li 
                                                style={{flex:1}}
                                                key={i}
                                            >
                                                <p
                                                    style={{
                                                        width:'100%',
                                                        border:'1px solid',
                                                        paddingBottom:'100%',
                                                    }}
                                                >{red}</p>
                                            </li>
                                        )
                                    })
                                } */}
                            </ul>
                        )
                    })
                }
            </div>
        )
    }
}

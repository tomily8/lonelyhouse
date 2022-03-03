import React from "react";
import '../style/top-image.css'
import Typed from 'typed.js'

export class TopImage extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            options: {
                strings: ['向晚意不适，驱车登古原。<br/>夕阳无限好，只是近黄昏。', 
                          '岭外音书绝，经冬复立春。<br/>近乡情更怯，不敢问来人。',
                          '千山鸟飞绝，万径人踪灭。<br/>孤舟蓑笠翁，独钓寒江雪。',
                          '君自故乡来，应知故乡事。<br/>来日绮窗前，寒梅著花未？',
                          '移舟泊烟渚，日暮客愁新。<br/>野旷天低树，江清月近人。'
                        ],
                typeSpeed: 300, // 打印速度
                shuffle: true,
                startDelay: 300, //开始之前的延迟300毫秒
                fadeOut: true,
                fadeOutDelay: 5000,
                loop: true, //是否循环
            }
        }
        
    }

    componentDidMount() {
        this.typed = new Typed('#slogan', this.state.options)
    }

    render () {
        return (
            <div className="top-image">
                <div className="top-image-inner">
                    <div className="welcomeDiv">
                        <span className="welcome">你好，旅行者</span>
                        <br />
                        <hr />
                        <br />
                    </div>
                    <div className="sloganDiv">
                        <span id="slogan" className="slogan"></span>
                    </div>
                </div>
            </div>
        )
    }
}
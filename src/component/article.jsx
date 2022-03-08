import React from "react";
import '../style/article.css';
import Vditor from 'vditor';
import 'vditor/src/assets/scss/index.scss';
import Chat from './chat'

export class Article extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            article: 'Hello, Vditor + React!',
            time: '2021-03-04 11:28',
            tags: ['node', 'javascript', 'err']
        }
    }

    componentDidMount () {
        const that = this
        const vditor =  new Vditor('vditor', {
            "height": 360,
            "width":"80%",
            "theme":'dark',
            "preview": {
                "theme": {
                    "current": "dark"
                }
            },
            "cache": {
                "enable": false,
            },
            "toolbarConfig": {
                hide: true,
            },
            after () {
                vditor.setValue(that.state.article)
                vditor.disabled();
            },
        })
        // setInterval(() => {console.log(vditor.getValue())}, 5000)
    }

    render () {
        return (
            <article className='vditor-container'>
                <header>
                    <span>
                        It's the header of this article
                    </span>
                    <Tags tags={this.state.tags} time={this.state.time}></Tags>
                </header>
                <div id='vditor' className='vditor'>
                </div>
                <div>
                    <Chat></Chat>
                </div>
            </article>
        )
    }
}

function Tags (props) {
    return (
        <div className='tags'>
            {props.tags.map((node, index) => {
                return <div className='tag' key={index}>{node}</div>
            })}
            <div className='tagTime'>{props.time}</div>
        </div>
    )
}
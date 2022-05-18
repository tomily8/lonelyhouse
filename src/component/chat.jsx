import React from "react";
import Vditor from 'vditor';
import styles from '../style/chat.module.css'

export default class Chat extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            editor: null,
            comments:[
                {
                    content: 'It\'s the Content I can see!'
                }
            ]
        }
    }

    componentDidMount() {
        const that = this
        // 生成需要的输入框组件
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state.editor = new Vditor('chatMenu', {
            "height": 360,
            "width":"100%",
            "theme":'dark',
            "preview": {
                "theme": {
                    "current": "dark"
                }
            },
            'placeholder': '有什么想要说的嘛？',
            "cache": {
                "enable": false,
            },
            "toolbarConfig": {
                hide: false,
            },
            after () {
                that.state.editor.setValue('')
            },
        })
    }

    render () {
        return (
            <div className={styles.chatMenu}>
                {/* 聊天输入框 */}
                <div id='chatMenu'>
                </div>
                {/* 提交数据 */}
                {/* 历史记录显示框 */}
                <ChatLists comments={this.state.comments}></ChatLists>
            </div>
        )
    }
}

function ChatLists(props) {
    return (
        <div className={styles.chatShow}>
            {props.comments.map((node, index) => {
                return (
                    <div className={styles.chatList} key={index}>
                        {node.content}
                    </div>
                )
            })}
        </div>
    )
}
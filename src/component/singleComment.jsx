import React from "react";
import styles from '../style/singlecomment.module.css'

export class SingleComment extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            vditor: null,
            comments: [
                {
                    'image': '../icon/icon.svg',
                    'name': 'XXXXXX',
                    'date': '2020-03-07',
                    'commentHTML': '这里是评论的内容，需要对<strong>内容<strong/>进行显示！'
                }
            ]
        }
    }

    render () {
        return (
            <div className={styles.aloneContent}>
                <div className={styles.aloneTotal}>
                    {this.state.comments.map((node, key) => {
                        return <SingleBref key={key} img={node.image} name={node.name} date={node.date} comment={node.commentHTML}></SingleBref>
                    })}
                </div>
            </div>
        )
    }
}

function SingleBref(props) {
    return (
        <div className={styles.singleBref}>
            <div className={styles.image}>
                <img src={props.comments} alt='avatar'></img>
            </div>
            <div className={styles.content}>
                <div className={styles.headline}>
                    <div className={styles.info}>
                        <div className={styles.name}>
                            {props.name}
                        </div>
                        <div className={styles.date}>
                            {props.date}
                        </div>
                    </div>
                    <div className={styles.message}>
                        留言
                    </div>
                </div>
                <div className={styles.comment} id='aloneComment' dangerouslySetInnerHTML={{__html: props.comment}}>
                </div>
            </div>
        </div>
    )
}
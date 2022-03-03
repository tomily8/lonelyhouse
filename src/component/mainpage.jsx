import React from "react";
import '../style/mainpage.css'

export class MainPage extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            // title introduce data
            article: [
                {
                    title:'测试1', 
                    introduce: '测试文本1', 
                    data: '2021-3-1',
                    href: '#'
                },
                {
                    title:'测试2', 
                    introduce: '测试文本2', 
                    data: '2021-3-2',
                    href: '#'
                },
                {
                    title:'测试3', 
                    introduce: '测试文本3', 
                    data: '2021-3-3',
                    href: '#'
                }
        ]
        }
    }

    render () {
        return (
            <main>
                {this.state.article.map((info, index) => {
                    return SinglePage(index, info.title, info.introduce, info.data)
                })}
                <div>
                    更多文章请前往文章页面...
                </div>
            </main>
        )
    }
}

function SinglePage(key, title, introduce, data) {
    return (
        <article className='bref-article' key={key}>
            <div className='bref-title'><span>{title}</span></div>
            <div className='bref-introduction'><span>{introduce}</span></div>
            <div className='bref-data'><span>{data}</span></div>
        </article>
    )
}
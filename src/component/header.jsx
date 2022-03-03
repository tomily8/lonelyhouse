import React from "react";
import '../style/header.css'
import home from '../icon/home.svg';

export class Header extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            list: [
                ['文章', ''],
                ['自省', ''],
                ['散心', '']
            ]
        }
    }

    render() {
        return (
            <header className="headerLine">
                <div className="header-home">
                    <img alt="Home" src={home}></img>
                </div>
                <ul className="header-page">
                    {this.state.list.map((item, index) => <li className="header-page-item" key={index}>{item[0]}</li>)}
                </ul>
                <img alt="myGithub" src={home} className="header-github"></img>
            </header>
        )
    }
}
import React from "react";
import '../style/header.css'
import home from '../icon/home.svg';
import { Link } from "react-router-dom";

export class Header extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            list: [
                ['文章', '/lonelyhouse/page'],
                ['自省', '/lonelyhouse/alone'],
                ['散心', '/lonelyhouse/relax']
            ]
        }
    }

    render() {
        return (
            <header className="headerLine">
                <div className="header-home">
                    <Link to='/lonelyhouse'><img alt="Home" src={home} ></img></Link>
                </div>
                <ul className="header-page">
                    {this.state.list.map((item, index) => <Link className="header-page-item" key={index} to={item[1]}>{item[0]}</Link>)}
                </ul>
                <img alt="myGithub" src={home} className="header-github"></img>
            </header>
        )
    }
}
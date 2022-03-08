import React from "react";
import '../style/article-list.css'
import {RedoOutlined} from '@ant-design/icons'
import { Select, Tag, Pagination } from 'antd';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";

export class ArticleList extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            header: '文章列表',
            index: [
                {
                    page: '文章内容1',
                    time: '2020-3-1',
                    navigator: 'article1'
                },
                {
                    page: '文章内容2',
                    time: '2020-3-2',
                    navigator: 'article2'
                },
                {
                    page: '文章内容3',
                    time: '2020-3-3',
                    navigator: 'article3'
                },

            ],
            selectNode: [
                {
                    name: '列表1',
                    value: '值1'
                },
                {
                    name: '列表2',
                    value: '值2'
                },
                {
                    name: '列表3',
                    value: '值3'
                }
            ],
            tagNode: [
                {
                    name: 'tag1'
                },
                {
                    name: 'tag2'
                },
                {
                    name: 'tag3'
                }
            ],
            page: {
                nowPage: 1,
                totalPage: 1
            }
        }
    }

    render () {
        return (
            <nav className='nav-list'>
                <header className='header-name'>
                    <span>{this.state.header}</span>
                </header>
                <main className='main-list'>
                    <Search articleType={this.state.selectNode} tagNode={this.state.tagNode} handleChange={this.handleChange} typeChange={this.typeChange}/>
                    {this.state.index.map((node, index) => 
                        <Link className='article-node' key={index} to={`/lonelyhouse/article/request? + ${node.navigator}`}>
                                <div className="article-node-page">
                                    <span>{node.page}</span>
                                </div>
                                <Tag className="article-node-time">{node.time}</Tag>
                        </Link>
                    )}
                    <Pagination defaultCurrent={this.state.page['nowPage']} total={this.state.page['totalPage']}></Pagination>
                </main>
            </nav>
        )
    }

    handleChange(value) {
        console.log(value)
    }

    typeChange(value) {
        console.log(value)
    }
}

function Search (props) {
    const { Option } = Select;

    return (
        <div className='search-container'>
            <div className='search'>
                <input placeholder='搜索文章' className='search-article'></input>
                <div className='refresh'>
                    <RedoOutlined  />
                </div>
            </div>
            <div className='select'>
                    <Select
                        className='select-name'
                        showSearch
                        placeholder="类型分类"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        filterSort={(optionA, optionB) =>
                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                        }
                        onChange={props.typeChange}
                    >
                        {props.articleType.map((node, index) => <Option key={index} value={node['value']}>{node['name']}</Option>)}
                    </Select>
                    <Select
                        mode='tags'
                        className='select-tag'
                        placeholder="选择标签分类"
                        onChange={props.handleChange}
                    >
                        {props.tagNode.map((node, index) => <Option key={index}>{node['name']}</Option>)}
                    </Select>
            </div>
        </div>
    )
}
/**
 * 只要是测试能不能连接到云盘的空间
 */
import React from "react"

const style = {
    'width': '500px',
    'height': '600px',
}

export class Connection extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            'url': 'https://shimo.im/docs/erAdPy02ZQHDVGAG/'
        }
    }

    tryBuild (url = this.state.url) {

    }
    
    componentDidMount() {
        // const script = document.createElement('script')
        // script.setAttribute("type","text/javascript")
        // script.src = this.state.url
        // document.getElementById('testing').appendChild(script)
    }

    render () {
        return (
            <div>
                <script src={this.state.url}>
                    
                </script>
            </div>
        )
    }
}
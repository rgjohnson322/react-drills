import React, {Component} from 'react'

export default class Image extends Component {
    render() {
        return (
        <div>
            <img src={this.props.myImage} />
            <caption>using my laptop to paddle to this island will be its greatest use</caption>
        </div>
        )
    }
}
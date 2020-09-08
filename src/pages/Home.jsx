import React, { Component } from 'react'

export default class Home extends Component {

    render() {
        return (
            <div>
                Hello Word!---显式路由参数{this.props.match.params.id}
            </div>
        )
    }
}

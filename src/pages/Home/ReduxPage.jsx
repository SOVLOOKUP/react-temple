import React, { Component } from 'react'
import {connect} from 'react-redux';
import {add, minus,asncAdd} from "../../redux/actions/counterAction"
import { Button } from 'antd'

class ReactReduxPage extends Component {
    componentDidMount() {
        console.log(this.props.location.state)
    }

    render() {
        const {counter,add,minus,asncAdd} = this.props;
        return (
            <div>
                <p>{counter}</p>
                <Button type="primary" onClick={add}>add</Button>
                <Button onClick={minus}>minus</Button>
                <Button type="primary" onClick={asncAdd}>asncAdd</Button>
            </div>
        )
    }
}

//connect
export default connect(
    //mapStateToProps
    state => ({counter: state.counter}),
    //mapDispatchToProps
    {
       add,minus,asncAdd
    }
)(ReactReduxPage);
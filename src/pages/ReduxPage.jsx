import React, { Component } from 'react'
import {connect} from 'react-redux';
import {add, minus,asncAdd} from "../redux/actions/counterAction"

class ReactReduxPage extends Component {
    componentDidMount() {
        console.log(this.props.location.state)
    }

    render() {
        const {counter,dispatch,add,minus,asncAdd} = this.props;
        return (
            <div>
                <p>{counter}</p>
                {/* <button onClick={()=>dispatch({type:'add'})}>add</button> */}
                <button onClick={add}>add</button>
                <button onClick={minus}>minus</button>
                <button onClick={asncAdd}>asncAdd</button>
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
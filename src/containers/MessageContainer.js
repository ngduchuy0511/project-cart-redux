import React, { Component } from 'react';
import {connect} from 'react-redux'
import Message from '../components/Message';
import PropTypes from 'prop-types';

class MessageContainer extends Component {
    render() {
        var {message}=this.props
        return (
              <Message message={message}/>
        );
    }
}
MessageContainer.propTypes={
    message: PropTypes.string.isRequired,
}
const mapStateProps=(state)=>{
    return{
        message: state.message
    }
}

export default connect(mapStateProps,null) (MessageContainer);
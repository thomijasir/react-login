import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class InputUsername extends Component{

    render(){
        return(
            <input type="text" name="u" placeholder="Username" required="required" />
        )
    }
}

export default InputUsername;
import React from 'react'
import { Component } from 'react';
import { Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
class AutoCompleteButtons extends Component{
    constructor(props){
        super();

    }

    render(){
        return (
            <NewButton onClick={(event)=>this.props.onClick(this.props.buttonValue)} fullWidth key={this.props.buttonValue}>{this.props.buttonValue}</NewButton>
        )
    }
    
}
const NewButton = styled(Button)({
    textAlign: 'left',
    fontSize: "2rem"
});


export default AutoCompleteButtons;
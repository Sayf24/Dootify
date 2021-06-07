import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
export default class Result extends Component {
    constructor(props){
        super();
        this.state={
            title: props.title
        }

    }
    render() {
        var curTitle=this.state.title
        try{
        return (
            <Card className="mainCard">
                <CardContent>
                    <h1>{curTitle.title}</h1>
                    <Typography>{curTitle.categories[0].name}</Typography>
                    <Typography>{curTitle.address.label}</Typography>
                    <Typography></Typography>
                    <Typography>{curTitle.contacts[0].phone[0].value}</Typography>
                </CardContent>

            </Card>
        )} catch(e){
            return <div style={{display: "none"}}></div>
        }
                  
    }
}
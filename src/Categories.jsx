import React, { Component } from 'react'
import { styled } from '@material-ui/core/styles';
//import { Button } from '@material-ui/core';
import ButtonCategoriesList from './ButtonCategoriesList';
import { motion } from "framer-motion"
import { Button } from '@material-ui/core';
import { Grid} from '@material-ui/core';

export default class Categories extends Component {
    constructor(props){
        super();
        this.state = {
            didUserSearch: false,
            leftCategories: ["Hiking","Movies","Fine-Dining","Restaurants","Quick-Bites","Shopping","Nightlife","Museums"],
            rightCategories:["Hotels","Local Transit","Casino","Wineries","Lakes","Forests","Bars","Coffee Shop"]
        }
    }

    componentDidUpdate(prevProps){
        if(this.props.rendered !== prevProps.rendered){
            setTimeout(function() { //Render after .750 seconds, only used for animations.
                this.setState({didUserSearch: true}) 
            }.bind(this), 750)
          }
        }
    

    render() {
        if(this.state.didUserSearch){
            return(
                [   <motion.div 
                    initial={{x: 0, y:window.screen.height}}
                    animate={{ x:this.state.animateXposition, y:0}}
                    //animate={{ x:Math.random()*800+(-800), y:Math.random()*-300+(-500)}}
                    transition={{  duration:2 }}
                    >
                        <h1>Choose some categories that will help us create a personalized report for you!</h1>
                        <NewButton onClick={(event)=>this.onClick()}>Search</NewButton>
                        </motion.div>,
                        <Grid container className="searchGrid">
                            <Grid item xs={6}><NewList list={this.state.leftCategories} position="left"></NewList></Grid>
                            <Grid item xs={6}><NewList list={this.state.rightCategories} position="right"></NewList></Grid>
                        </Grid>

                    

                ]
            )
        }else{
            return (
                <div>
                    
                </div>
            )
        }
        }
        onClick(e){
            this.setState({
                didUserSearch: false
            })
            this.props.renderSearchResults();
        }
}
const NewButton = styled(Button)({
    width: "300px",
    textAlign: 'left',
    fontSize: "2rem",
    backgroundColor: "rgb(170, 173, 196)",
    color: "white",
    marginTop: "5px",
    boxShadow: '0 4px 5px 2px rgba(255, 105, 135, .3)'
});
const NewList = styled(ButtonCategoriesList)({
    background: "#FDFFFC" ,
    borderRadius: "50px",
    height: "50px",
    fontSize: "3rem",
    paddingLeft: "10px",
    textAlign: "left" 
});

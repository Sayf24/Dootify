import React, { Component } from 'react'
import { Button} from '@material-ui/core';
import { motion } from "framer-motion"
import { styled } from '@material-ui/core/styles';

export default class ButtonCategory extends Component {
    constructor(props){
        super();
        this.state = {
            title: props.buttonvalue,
            animateXposition: props.animatePosition,
            height: props.height,
            position: props.position,
            isClicked: false
        }
    }
    render() {

        return (
            <div>
                <motion.div 
                initial={{scale:0}}
                animate={{scale:1 }}
                transition={{  duration:1, delay:.25, }}
                >
               
                    <NewButton  onClick={(event)=>this.onClick()} className="buttonCategory" buttonvalue={this.state.title} >{this.state.title}</NewButton>
                </motion.div>
            </div>
        )
    }
    onClick(e){
        var cookieString = getCookie("categories")
        if(cookieString.includes(this.state.title)){
            cookieString.replace(this.state.title+",","")
            this.setState({
                isClicked: false
            })
            document.cookie="categories="+cookieString
        }else{
            document.cookie="categories="+cookieString+this.state.title+","
            this.setState({
                isClicked: false
            })
        }
    }
    
}
const NewButton = styled(Button)({
    width: "300px",
    textAlign: 'left',
    fontSize: "1.5rem",
    backgroundColor: "rgb(200, 29, 37)",
    color: "white",
    marginTop: "5px"
});
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}



import React from 'react'
import { styled } from '@material-ui/core/styles';
import ButtonCategory from './ButtonCategory';

const ButtonCategoriesList = props => {
    var initWidth=window.screen.width/2
    console.log(initWidth+"poop")
    var width=window.screen.width/-2
    var height=-550
    return (
        <ul >
            {
                props.list.map((title)=>{
                    return (
                        
                            <NewButton key={Math.random()*800} animatePosition ={width} height={height} onClick={props.onClick} buttonvalue={title} fullWidth position={props.position}>{title}</NewButton>
                        
                    )
                    
                }


                )
            }
        </ul>
    )
    
}
const NewButton = styled(ButtonCategory)({
    textAlign: 'left',
    fontSize: "2rem"
});


export default ButtonCategoriesList

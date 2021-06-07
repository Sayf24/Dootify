import { Input } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { Component } from 'react';
import SearchList from './SearchList'
import './App.css';
import axios from 'axios';
import { Button } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Typography } from '@material-ui/core';
import { motion } from "framer-motion"

class AutoSuggest extends Component{
    
    constructor(){
        super();
        this.state = {
            search: '',
            searchItems: [],
            animateAway: false,
            searched: false
        }
    }
    
    setSearch(input){
        this.setState({
            search: input
        })
        axios.get('https://autosuggest.search.hereapi.com/v1/autosuggest?in=countryCode:USA&in=bbox:-124.72396100841614,24.554959132954313,-66.98308052780928,49.344638866802775&q='+input+'&apiKey=exkvVrXw8hN4lZtiNCdl5nCsmJ3Z_X2SX43M1i0G4po').then((response) =>{

            var tempArray = [];
            response.data.items.map((title)=>{
                if(title.resultType === "locality"|| title.resultType ==="administrativeArea"){
                    tempArray.push(title)
                }
                return true;
            })
            if(tempArray.length > 5){
                tempArray = tempArray.slice(0,5)
            }
            this.setState({
                searchItems: tempArray.map((title) => title.title)
            })
         })
         return <NewList  onClick={this.onClick.bind(this)} list={this.state.searchItems}>dfsdfs</NewList>;
    }
    setCoordinates(){
        axios.get('https://autosuggest.search.hereapi.com/v1/autosuggest?in=countryCode:USA&in=bbox:-124.72396100841614,24.554959132954313,-66.98308052780928,49.344638866802775&q='+this.state.search+'&apiKey=exkvVrXw8hN4lZtiNCdl5nCsmJ3Z_X2SX43M1i0G4po').then((response) =>{
            document.cookie= "coordinates="+response.data.items[0].mapView.north +","+response.data.items[0].mapView.east ;
            document.cookie="search=true";
            this.setState({
                animateAway: true,
                searched: true
            })
            this.props.renderButtons();
         })
    }
    onClick(searched){
        this.setState({
            search: searched,
        })
    }

    render(){
        return (
            <motion.div 
                initial={{x: 0}}
                animate={ this.state.animateAway ? {x:-2000} : {x:0}}
                transition={{  duration: 1 }}
                
            >
            <div>
                <div className="splashText">
                <SplashText/>
                </div>
                <NewInput id="input1" onChange = {event => this.setSearch(event.target.value) } fullWidth disableUnderline value={this.state.search} placeholder="Enter A City or Town you'd like to visit"></NewInput>
                <NewList  onClick={this.onClick.bind(this)} list={this.state.searchItems}>dfsdfs</NewList>
                <Button  onClick={(event)=>this.setCoordinates()} variant="contained" >Search</Button>
            </div>
            </motion.div>
        )
    }
}

const NewInput = styled(Input)({
    background: "#FDFFFC" ,
    borderRadius: "50px",
    height: "50px",
    fontSize: "2rem",
    paddingLeft: "10px"
});
const NewList = styled(SearchList)({
    background: "#FDFFFC" ,
    borderRadius: "50px",
    height: "50px",
    fontSize: "3rem",
    paddingLeft: "10px",
    textAlign: "left" 
});
  
function SplashText(){
    const isXSM = useMediaQuery('(max-width:600px)');
    const isSM = useMediaQuery('(max-width:768px)');
    const isMD = useMediaQuery('(max-width:992px)');
    const isLG = useMediaQuery('(max-width:1024px)');
    const isXLG = useMediaQuery('(min-width:1025px)');
  
    if(isXSM){
      return <Typography variant="h6">Say goodbye to wasted days, and hello to exciting tomorrows</Typography>
    }else if(isSM){
      return <Typography variant="h4">Say goodbye to wasted days, and hello to exciting tomorrows</Typography>
    }
    else if(isMD){
      return <Typography variant="h3">Say goodbye to wasted days, and hello to exciting tomorrows</Typography>
    }else if(isLG){
      return <Typography variant="h2">Say goodbye to wasted days, and hello to exciting tomorrows</Typography>
    }else if(isXLG){
      return <Typography variant="h1">Say goodbye to wasted days, and hello to exciting tomorrows</Typography>
    }
    else{
      return <Typography variant="h6">Say goodbye to wasted days, and hello to exciting tomorrows</Typography>
    }
  }

  
export default AutoSuggest

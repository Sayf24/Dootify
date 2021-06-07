import React, { Component } from 'react'
import axios from 'axios';
import SearchItemsList from './SearchItemsList'
export default class SearchResults extends Component {
    constructor(props){
        super();
        this.state={
            isRendered: false,
            searchItems: ["s"]
        }
    }   
    componentDidUpdate(prevProps){
        if(this.props.rendered !== prevProps.rendered){
            this.setState({isRendered: true})
            var cookie = getCookie("categories")
            var coord = getCookie("coordinates")
            var categories=cookie.split(",")
            for(var i=0;i<categories.length-1;i++){
                // eslint-disable-next-line no-loop-func
                axios.get('https://discover.search.hereapi.com/v1/discover?in=circle:'+coord+';r=15000&q='+categories[i]+'&apiKey=exkvVrXw8hN4lZtiNCdl5nCsmJ3Z_X2SX43M1i0G4po').then((response) =>{
                    if(response.data.items.length > 5){
                        response.data.items = response.data.items.slice(0,10)
                    }
                    var responseItems =  response.data.items.map((title) => title);
                    var tempArray = this.state.searchItems.map((title) => title);
                    var saveToStateArray = tempArray.concat(responseItems).map((title) => title);
                    this.setState({
                        searchItems: saveToStateArray.map((title) => title)
                    })


                 })
            }

        }

        return true;
    }

    render() {
        if(this.state.isRendered){
            
            return (
                <div>
                    <SearchItemsList list={this.state.searchItems}/>
                </div>
            )
        }else{
            return(
                <div>

                </div>
            )
        }
    }
    
}
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
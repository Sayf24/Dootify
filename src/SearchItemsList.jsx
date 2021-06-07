import React, { Component } from 'react'
import Result from './Result'


export default class SearchItemsList extends Component {
    

    constructor(props){
        
        super();
        this.state={
            searchItems: props.list
        }


    }
    componentDidUpdate(prevProps) {
        if(this.props.list !== prevProps.list){
          this.setState({searchItems: this.props.list})
        }
      }
      
    render() {
        if(this.state.searchItems.length>1){
            var searchResultsWithoutFirst = this.state.searchItems
            searchResultsWithoutFirst.shift()
            try{
            return (
                <div className="searchResults">
                {
                    searchResultsWithoutFirst.map((title)=>{
                        return (
                            <Result title={title}/>
                        )
                    }


                    )
                }
            </div>
            )} catch(e){
                console.log('error',e)
            }
        }else{
            return ( <div></div>)
        }
    }
    
}

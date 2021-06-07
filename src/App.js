import './App.css';
import NavBar from './NavBar.jsx';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Grid} from '@material-ui/core';
import AutoSuggest from './AutoSuggest';
import Categories from './Categories';
import React from 'react';
import {Component} from 'react';
import SearchResults from './SearchResults';
const theme = createMuiTheme({

  palette: {
    primary: {
      main: '#1F2421',
    },
    secondary:{
      main: '#AAADC4'
    }
  },
});


export default class App extends Component {
  constructor(props){
    super();
    this.state = {
        didUserSearch: false,
        displayResults: false
    }
    document.cookie="search=false";
    document.cookie="categories="
}
renderButtons(){
  this.setState({
    didUserSearch:true
  })
}
renderSearchResults(){
  this.setState({
    displayResults: true
  })
  console.log("wowee")
}
render(){
  return (
    <div className="App">
      <ThemeProvider theme={theme}> 
          <header className="App-header">
            <NavBar className="navBar"></NavBar>
          </header>
        <Grid container className="searchGrid">
          <Grid item xs={2}/>
          <Grid item xs={8}>
            <form>
              <div className="search">
              <SearchResults rendered={this.state.displayResults} />
              <Categories rendered={this.state.didUserSearch} renderSearchResults={this.renderSearchResults.bind(this)} ></Categories>
              <AutoSuggest renderButtons={this.renderButtons.bind(this)}></AutoSuggest>
              
              </div>
            </form>
          </Grid>
          <Grid item xs={2}/>
        </Grid>
      </ThemeProvider>
    </div>
  );
  }
}



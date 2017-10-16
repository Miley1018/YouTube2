import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import YTSearch from 'youtube-api-search';
import {Component} from 'react';
import _ from 'lodash';
import SearchBar from './components/search_bar';

const API_KEY='AIzaSyAuWE485k51YR5F1hMLWw2aM7lg9zRAVJs';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      videos:[],
      selectedVideos:null
    }
  }
  videoSearch(term){
    YTSearch({key:API_KEY,term:term},(videos)=>{
      this.setState({vodeos:videos,selectedVideos:videos[0]})
    })
  }
  render(){
    const videoSearch = _.debounce((term)=>{this.videoSearch(term)},300);
    return(
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
      </div>
    )
  }
}
ReactDOM.render(
 <App/>
  , document.querySelector('.container'));

import React,{Component} from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={
            term:'Start searching'
        }
    }
    render(){
        return(
            <div>
                    <input type='text' onChange={(event)=>{
                        this.setState({term:event.target.value});
                        this.props.onSearchTermChange(event.target.value)
                    }} placeholder='Come on to search!'></input>
                    Input:{this.state.term}
            </div>
        );
    };
}
export default SearchBar;

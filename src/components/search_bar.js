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
                <form>
                    <input type='text' onChange={(event)=>{
                        this.setState({term:event.target.value});
                        this.props.onSearchTermChange(event.target.value)
                    }} placeholder='Come on to search!'></input>
                    <button type='submit' >Search</button>
                    Input:{this.state.term}
                </form>
            </div>
        );
    };
}
export default SearchBar;

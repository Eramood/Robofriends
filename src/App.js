import React, {Component} from 'react';
import Cardlist from './Cardlist';
import  {robots}  from './robots';
import Searchbox from './Searchbox'




class App extends Component {
    constructor(){
        super()
        this.state ={
            robots : robots,
            searchfield : ''
        }
    }

Searchfunction = (event)=> {
    this.setState({searchfield:event.target.value})
}


    render (){
        const searchedbot = this.state.robots.filter(robots =>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });
        return (
            <div className='tc'> 
            <h1>Robo Friends</h1>
            <Searchbox searchchange={this.Searchfunction} />
            <Cardlist robots={searchedbot}/>
            </div>
        )
    }
}

export default  App;
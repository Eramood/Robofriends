import React, {Component} from 'react';
import Cardlist from '../components/Cardlist';
//import  {robots}  from './robots'; i'm not using for now it's hardcoded 
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll';



class App extends Component {
    constructor(){
        super()
        this.state ={
            robots : [],
            searchfield : ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:users}));
    }


    Searchfunction = (event)=> {  //this function is used to search a robot name 
        this.setState({searchfield:event.target.value})
    }


    render (){
        const {robots,searchfield} = this.state;
            const searchedbot = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
            });
            if (robots.length===0){
                return <h1 className='tc'>loading...</h1> 
            } else{
            return (
                    <div className='tc'> 
                    <h1 className='f1'>Robo Friends</h1>
                    <Searchbox searchchange={this.Searchfunction} />
                    <Scroll>
                    <Cardlist robots={searchedbot}/>
                    </Scroll>
                    </div>
            );
        }
    }
}

export default  App;
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link} from 'react-router-dom';

class App extends React.Component {
    constructor(pops){
        super(pops);
        
    };
    render(){
        return(
            <div>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
} export default App;

export class Home extends React.Component{
    render(){
        return(
            <div>
                Home...
            </div>
        )
    }
}

export class About extends React.Component{
    render(){
        return(
            <div>
                About...
            </div>
        )
    }
}

export class Contact extends React.Component{
    render(){
        return(
            <div>
                Contact...
            </div>
        )
    }
}
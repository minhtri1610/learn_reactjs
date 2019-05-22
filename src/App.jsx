import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props){
        super();
        this.state = {
            data: ''
        }
        this.updateState = this.updateStateVal.bind(this);
        this.clearInput = this.clearInput.bind(this);
    };
    updateStateVal(e){
        this.setState({data:e.target.value});
    }
    clearInput(){
        this.setState({
            data: ''
        });
        ReactDOM.findDOMNode(this.refs.myInput).focus();
    }
    render(){
        return(
            <div>
                <input type="text" value = {this.setState.data} onChange = {this.updateState} ref = "myInput"/>
                <button onClick = {this.clearInput}>Clear</button>
                <h4>{this.state.data}</h4>
            </div>
        )
    }
}

class Content extends React.Component{
    
}

export default App;
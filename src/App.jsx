import React from 'react';

class App extends React.Component {
    constructor(pops){
        super(pops);
        this.state = {
            data: 'data state'
        }
        this.updateState = this.updateStateAbc.bind(this);
    };
    updateStateAbc(e){
        this.setState({data: e.target.value})
    }
    render(){
        return(
            <div>
                <Content myDataProp = {this.state.data} updateStateProp = {this.updateState}></Content>
            </div>
        )
    }
}

class Content extends React.Component{
    render(){
        return(
            <div>
                <input type="text" value = {this.props.myDataProp} onChange = {this.props.updateStateProp}/>
                <h3>{this.props.myDataProp}</h3>
            </div>
        )
    }
}

export default App;
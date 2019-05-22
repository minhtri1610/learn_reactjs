import React from 'react';

class App extends React.Component {
    constructor(pops){
        super(pops);
        this.state = {
            data: 0
        }
        this.setNewNumber = this.setNewNumber.bind(this)
    };
    setNewNumber(){
        this.setState({data: this.state.data + 1})
    }
    render(){
        return(
            <div>
                <button onClick = {this.setNewNumber}>INCREMENT</button>
                <Content myNumber = {this.state.data}></Content>
            </div>
        )
    }
}

class Content extends React.Component{
    componentWillMount(){
        alert('1 will mount');
    }
    componentDidMount(){
        alert('2 did mount');
    }
    componentWillReceiveProps(nextProps){
        alert('3 will receive props');
        // console.log('3' + nextProps);
    }
    shouldComponentUpdate(nextProps, nextState){
        return true;
    }
    componentWillUpdate(nextProps, nextState){
        alert('4 ');
    }
    componentDidUpdate(prevProps, prevState){
        alert(5);
    }
    componentWillUnmount() {
        alert(6);
    }
    render(){
        return(
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        )
    }
}

export default App;
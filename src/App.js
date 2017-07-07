import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class App extends React.Component{
  constructor(){
    super();
    this.state ={a: ''}
  }
  update(e){
    this.setState({
      a:this.a.refs.input.value,
      // a: this.refs.a.value// a: this.refs.a.value,//referencias a elementos
      b: this.refs.b.value
    })
  }
  render(){ // con una variable
      return (
        <div>
        <Input
          ref={ component => this.a = component}
          update={this.update.bind(this)}
          />{this.state.a}
          <hr/>
          <input
            ref="b"
            type="text"
            onChange={this.update.bind(this)}
            />{this.state.b}
        </div>
      )
  }
} // App Component


class Input extends React.Component {

    render() {
        return <div><input ref="input" type="text" onChange={this.props.update}/></div>
    }
}

export default App

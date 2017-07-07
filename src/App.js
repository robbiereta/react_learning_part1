import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      txt: "this is the state text"
    }
  }

update(e){
  this.setState({txt: e.target.value})
}


  render(){ // con una variable
      return <button> i <Heart/> React </button>
      // <div>
      // <h1>{this.state.txt}</h1>
      // <Widget update={this.update.bind(this)}/>
      // </div>

    // para llamar a una propiedad de un elemnto html osea un "prop"
    // se hace con this.props y despues el nombre del prop en este caso "txt"
    // JSX convertido a javascript
  }
} // App Component

const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component{
  render(){
    return <span>&hearts;</span>
  }
}

// const Widget = (props) =>
// <input type="text" onChange={props.update}/>
//
//
// App.defaultProps= {
//  txt : "this is the default text"
// }
export default App

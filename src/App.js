import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component{
  render(){
      let txt=this.props.txt // con una variable
      return<h1>{txt}</h1>
    // para llamar a una propiedad de un elemnto html osea un "prop"
    // se hace con this.props y despues el nombre del prop en este caso "txt"
    // JSX convertido a javascript
  }
}

App.PropTypes = {
 txt : PropTypes.string,
 cat : PropTypes.number.isRequired
}

App.defaultProps= {
 txt : "this is the default text"
}
export default App

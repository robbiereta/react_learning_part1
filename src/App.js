    import React from 'react';
    import ReactDOM from 'react-dom';
    import PropTypes from 'prop-types';

//High order component
const HOC= (InnerComponent) => class extends React.Component{
  constructor(props){
  	super(props);
  	this.state = {count: 0};
  }
  update(){
    this.setState({count: this.state.count +1})
  }
  componentWillMount() {
    console.log('will mount');
  }
  render(){
    return(
      <InnerComponent
        {...this.props}
        {...this.state}
        update={this.update.bind(this)}
        />
    );
  }
}

    class App extends React.Component{
      render(){

        return(
          <div>
            <Button>button</Button>
            <hr/>
              <LabelHOC>Label</LabelHOC>
          </div>
        )
      }

    } // App Component

const Button= HOC((props) =>
 <button onClick={props.update}>{props.children} - {props.count}</button>)


class Label extends React.Component {
  componentWillMount() {
    console.log('label will mount');
  }

    render() {
        return (
            <label onMouseMove={this.props.update}>
            {this.props.children} - {this.props.count}</label>
        );
    }
}

const LabelHOC = HOC(Label)

    export default App

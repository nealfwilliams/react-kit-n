import React from 'react';
import store from '../reduxStore';
import unboundActions from '../actions';
import {bindActionCreators} from 'redux';

let actions = bindActionCreators(unboundActions, store.dispatch);

class OutputComponentListItemChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hover: false};
  }

  handleMouseEnter() {
    this.setState({hover: true});
  }

  handleMouseLeave() {
    this.setState({hover: false});
  }

  render() {
    return (
      <div className="outputComponentChild"
        onMouseEnter={this.handleMouseEnter.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}>
        <div>{this.props.name}</div>
        {this.state.hover && <i className="material-icons">backspace</i>}
      </div>
    );
  }
}

export default OutputComponentListItemChild;
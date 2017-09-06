import React from 'react';
import OutputComponentListItem from './OutputComponentListItem';
import _ from 'lodash';
import store from '../reduxStore';
import unboundActions from '../actions';
import {bindActionCreators} from 'redux';

let actions = bindActionCreators(unboundActions, store.dispatch);

class OutputComponentList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickAdd = this.handleClickAdd.bind(this);
  }

  handleClickAdd() {
    actions.addComponent();
  }

  render() {
    return (
      <div className="col-md-4 outputComponentsCol">
        <div className="outputComponentsHeading">
          <h3>Components</h3>
          <i className="material-icons addComponentButton"
            onClick={this.handleClickAdd}>add_circle_outline</i>
        </div>
        <div className="outputComponents">
          {_.map(this.props.outputComponents, (outputComponent, id) => (
            <OutputComponentListItem outputComponents={this.props.outputComponents} outputComponent={outputComponent} id={id} />
          )
          )}
        </div>
      </div>
    );
  }
}

export default OutputComponentList;

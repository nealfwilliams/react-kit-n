import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import unboundActions from '../actions';
import store from '../reduxStore';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

let actions = bindActionCreators(unboundActions, store.dispatch);

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
class OutputActionsEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      target: '',
      type: '',
      invalidName: false,
      invalidTarget: false,
      invalidType: false
    }
  }

  handleClose() {
    // actions.toggleEditModal(this.props.outputStore.editing.path);
  };

  handleSubmit() {
    // try {
    //   if (this.state.name === '') {
    //     throw 'name';
    //   }
    //   if (this.state.type === '') {
    //     throw 'type';
    //   }

    //   let initialValue = this.state.initialValue;
    //   if (initialValue === '' || initialValue === 'undefined' || initialValue === undefined) {
    //     initialValue = undefined;

    //   } else if (initialValue === "''" || initialValue === '""') {
    //     initialValue = '';

    //   } else {
    //     initialValue = JSON.parse(this.state.initialValue);

    //   }
  
    //   let isElementSchema = this.props.outputStore.editing.path[this.props.outputStore.editing.path.length - 1] === 'elementSchema'
    //                           ? true
    //                           : false;
    //   let setProperty = isElementSchema ? {type: this.state.type} : {name: this.state.name, initialValue, type: this.state.type};
    //   actions.setOutputStoreProperty(setProperty, this.props.outputStore.editing.path);
    //   actions.toggleEditModal(this.props.outputStore.editing.path);

    // } catch(error) {
    //   if (error === 'name') {
    //     this.setState({invalidName: true});
    //   } else if (error === 'type') {
    //     this.setState({invalidName: false, invalidType: true});
    //   } else {
    //     this.setState({invalidName: false, invalidType: false, invalidInitialValue: true});
    //   }
    // }
  }

  handleChangeName(event) {
    // this.setState({name: event.target.value});
  }

  handleChangeInitialValue(event) {
    // this.setState({initialValue: event.target.value});
  }

  handleChangeType(event, key, payload) {
    // this.setState({type: payload});
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.outputStore.editing) {
    //   let property = nextProps.outputStore.editing.property;
    //   this.setState({
    //     name: property.name || '',
    //     initialValue: JSON.stringify(property.initialValue),
    //     type: property.type || '',
    //     invalidName: false,
    //     invalidType: false,
    //     invalidInitialValue: false
    //   });
    // } else {
    //   this.setState({
    //     name: '',
    //     initialValue: '',
    //     type: '',
    //     invalidName: false,
    //     invalidType: false,
    //     invalidInitialValue: false
    //   });
    // }
  }

  render() {
    // let isElementSchema;
    // if (this.props.outputStore.editing) {
    //   isElementSchema = this.props.outputStore.editing.path[this.props.outputStore.editing.path.length - 1] === 'elementSchema'
    //                         ? true
    //                         : false;
    // } else {
    //   isElementSchema = false;
    // }
    
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose.bind(this)}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleSubmit.bind(this)}
      />
    ];

    return (
      <div>
        <Dialog
          title="Edit Property"
          actions={actions}
          modal={false}
          open={false}
          // open={this.props.outputStore.editing === null ? false : true}
          onRequestClose={this.handleClose.bind(this)}
        >
          <TextField floatingLabelText="Name" value={this.state.name} onChange={this.handleChangeName.bind(this)}/>
          <TextField floatingLabelText="Initial Value" value={this.state.initialValue} onChange={this.handleChangeInitialValue.bind(this)}/>
          <SelectField floatingLabelText="Type" value={this.state.type} onChange={this.handleChangeType.bind(this)}>
            <MenuItem value={'string'} primaryText="string" />
            <MenuItem value={'number'} primaryText="number" />
            <MenuItem value={'boolean'} primaryText="boolean" />
            <MenuItem value={'object'} primaryText="object" />
            <MenuItem value={'array'} primaryText="array" />
          </SelectField>
          {this.state.invalidName && <div className="red">Please enter a name</div>}
          {this.state.invalidType && <div className="red">Please select a type</div>}
          {this.state.invalidInitialValue && <div className="red">Please enter a valid initial value or leave that field blank</div>}
        </Dialog>
      </div>
    );
  }
}

OutputActionsEdit = connect(
  (state) => (
    {
      outputStore: state.outputStore,
      outputActions: state.outputActions
    }
  )
)(OutputActionsEdit);

export default OutputActionsEdit;

// <select className="outputActionSelect" value={this.props.outputAction.target} onChange={this.handleChangeTarget.bind(this)}>
//   <option value=''></option>
//   {Object.keys(this.props.targetsTypes).map((target) => (
//     <option value={target}>{target}</option>
//   )
//   )}
// </select>


// <select className="outputActionSelect" value={this.props.outputAction.type} onChange={this.handleChangeType.bind(this)}>
//   <option value=''></option>
//   {utilities.outputActions.getActionCategoriesForTargetType(this.props.targetsTypes[this.props.outputAction.target]).map((type) => (
//     <option value={type}>{type}</option>
//   )
//   )}
// </select>
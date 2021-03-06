import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import reducer from './reducers';
import store from './reduxStore';
import OutputStoreForm from './components/OutputStoreForm';
import OutputActionsForm from './components/OutputActionsForm';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World from React</h1>
        <OutputStoreForm />
      </div>
    );
  }
}

const ConnectedApp = () => {
  return (
    <Provider store={store}>
      <div>
        <OutputStoreForm />
        <OutputActionsForm />
      </div>
    </Provider>
  );
};

ReactDOM.render(<ConnectedApp />, document.getElementById('root'));

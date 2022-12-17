import React from 'react';
import ReactDOM from 'react-dom';
import List from './containers/List';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	return <List />;
};

ReactDOM.render(<App />, document.getElementById('root'));
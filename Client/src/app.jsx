// set up client here 

import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
	render () {
		return <p>Hello there Gorgeous, you did it!</p>;
	}
}

render(<App />, document.getElementById('app'));

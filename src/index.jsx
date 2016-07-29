require("./../node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';
import ShowCommentSection from './core/screens/ShowCommentSection';
// import ShowTinyMCE from './core/screens/ShowtinyMCE';

export class App extends React.Component {
	render()
	{
		return (
			<ShowCommentSection/>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));

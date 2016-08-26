require("./../node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';
import ShowCommentSection from './core/screens/ShowCommentSection';
import ShowTinyMCE from './core/screens/ShowtinyMCE';
import ShowCKEditor from './core/screens/ShowCKEditor';
import ShowDraftjs from './core/screens/ShowDraftjs';
import ShowReactRte from './core/screens/ShowReactRte';

export class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: 'ShowReactRte'};
	}
	render()
	{
		let comp = <ShowReactRte/>;
		if (this.state.value.indexOf('ShowTinyMCE') != -1) {
			comp = <ShowTinyMCE/>;
		}
		else if (this.state.value === 'ShowCKEditor') {
			comp = <ShowCKEditor/>;
		}
		else if (this.state.value === 'ShowReactRte') {
			comp = <ShowReactRte/>;
		}
		return (
			<div>
				<button onClick={() => this.setState({value: 'ShowTinyMCE'})}>Show TinyMCE</button>
				<button onClick={() => this.setState({value: 'ShowCKEditor'})}>Show CKEditor</button>
				<button onClick={() => this.setState({value: 'ShowReactRte'})}>Show React RTE</button>
				{comp}

				{/*<ShowDraftjs/>*/}
				{/*<ShowCommentSection/>*/}
			</div>
		);
	}

	renderComponent = (compName) => {
		console.log("rendering: " + compName)
		this.state.value = compName;
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));

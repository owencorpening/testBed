import React from 'react';
import style from './ShowTinyMCE.css';

export default class ShowCKEditor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			field_value: this.props.field_value,
			showWYSIWYG: false,
			divBorderStyle: {
				border: '1px solid black',
				margin: '5px',
				marginLeft: '15px'
			}
		};
		this.handleEditorBegin();
	}

	render() {
		return (
			<div style={this.state.divBorderStyle} className={style.container}>
				<div style={this.state.divBorderStyle} className={style.divLeft}>
					this is a div left of the editor
				</div>

				<div name="myspace" className={style.divCenter}>
					I am some placeholder text
				</div>

				<div style={this.state.divBorderStyle} className={style.divRight}>
					this is a div to the right of the editor
				</div>

			</div>
		);
	}

	handleEditorBegin = () => {
		console.log('CEditor initializing ...');

		var self = this;
		function toggle() {
			console.log("in handleEditorBegin");
			CKEDITOR.replace("myspace", {toolbar: "Basic", width: 870, height: 150});
			CKEDITOR.instances.editor1.on('change', function () {
				console.log("blur");
				let data = CKEDITOR.instances.editor1.getData();
				console.log('Content was updated:', data);
				self.setState({
					field_value: escape(data),
					showWYSIWYG: false
				});
				this.value = data;
				CKEDITOR.instances.editor1.destroy();
			});
		}

		window.setTimeout(toggle, 100);
	}
}

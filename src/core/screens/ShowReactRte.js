import React, {Component, PropTypes} from 'react';
import RichTextEditor from 'react-rte';
import style from './ShowReactRte.css';

class ShowReactRte extends Component {
	constructor(props) {
		super(props);
		this.divBorderStyle = {
			border: '1px solid black',
			margin: '5px',
			marginLeft: '15px'
		};
		this.state = {
			value: RichTextEditor.createEmptyValue()
		}
	}


	// All the available buttons are listed here, note the top plugin called 'core'
	// http://archive.tinymce.com/wiki.php/Controls
	render() {
		return (
			<div style={this.divBorderStyle} className={style.container}>
				<div style={this.divBorderStyle} className={style.divLeft}>
					this is a div left of the editor
				</div>

				<div className={style.divCenter}>
					<RichTextEditor
						value={this.state.value}
						onChange={this.onChange}
					/>
				</div>

				<div style={this.divBorderStyle} className={style.divRight}>
					this is a div to the right of the editor
				</div>

			</div>
		);
	}

	onChange = (value) => {
		console.log('Content was updated:', value);
		this.setState({value});
	}
}


export default ShowReactRte;

"use strict";
import React from 'react';
import style from './ShowDraftjs.css';
import {
	Editor,
	EditorState,
	RichUtils,
	DefaultDraftBlockRenderMap
} from 'draft-js';

// Custom overrides for "code" style.
var styleMap = {
	CODE: {
		backgroundColor: 'rgba(0, 0, 0, 0.05)',
		fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
		fontSize: 16,
		padding: 2,
	},
};

var BLOCK_TYPES = [
	{label: 'H1', style: 'header-one'},
	{label: 'H2', style: 'header-two'},
	{label: 'H3', style: 'header-three'},
	{label: 'H4', style: 'header-four'},
	{label: 'H5', style: 'header-five'},
	{label: 'H6', style: 'header-six'},
	{label: 'Blockquote', style: 'blockquote'},
	{label: 'UL', style: 'unordered-list-item'},
	{label: 'OL', style: 'ordered-list-item'},
	{label: 'Code Block', style: 'code-block'},
];

var BlockStyleControls = (props) => {
	var {editorState} = props;
	var selection = editorState.getSelection();
	var blockType = editorState
		.getCurrentContent()
		.getBlockForKey(selection.getStartKey())
		.getType();

	return (
		<div className="style.RichEditor-controls">
			{BLOCK_TYPES.map((type) =>
				<StyleButton
					key={type.label}
					active={type.style === blockType}
					label={type.label}
					onToggle={props.onToggle}
					style={type.style}
				/>
			)}
		</div>
	);
};

var InlineStyleControls = (props) => {
	var currentStyle = props.editorState.getCurrentInlineStyle();
	return (
		<div className="style.RichEditor-controls">
			{INLINE_STYLES.map(type =>
				<StyleButton
					key={type.label}
					active={currentStyle.has(type.style)}
					label={type.label}
					onToggle={props.onToggle}
					style={type.style}
				/>
			)}
		</div>
	);
};


var INLINE_STYLES = [
	{label: 'Bold', style: 'BOLD'},
	{label: 'Italic', style: 'ITALIC'},
	{label: 'Underline', style: 'UNDERLINE'},
	{label: 'Monospace', style: 'CODE'},
];

export default class ShowDraftjs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {editorState: EditorState.createEmpty()};
		// this.onChange = (editorState) => this.setState({editorState});
	}

	onChange = (editorState) => {
		console.log("onChange");
		this.setState({editorState});
	}

	focus = () => this.refs.editor.focus();

	render = () => {
		var {editorState} = this.state;
		var className = 'style.RichEditor-editor';

		return (
			<div className="style.RichEditor-root">
				<BlockStyleControls
					editorState={editorState}
					onToggle={this.toggleBlockType}
				/>
				<InlineStyleControls
					editorState={editorState}
					onToggle={this.toggleInlineStyle}
				/>
				<div className={className} onClick={this.focus}>
					<Editor
						blockStyleFn={this.getBlockStyle}
						customStyleMap={this.styleMap}
						editorState={editorState}
						handleKeyCommand={this.handleKeyCommand}
						onChange={this.onChange}
						placeholder="Tell a story..."
						ref="editor"
						spellCheck={true}
					/>
				</div>
			</div>
		)
	}

	handleKeyCommand = (command) => {
		var {editorState} = this.state;
		var newState = RichUtils.handleKeyCommand(editorState, command);
		if (newState) {
			this.onChange(newState);
			return true;
		}
		return false;
	}

	// <Editor editorState={editorState} onChange={this.onChange} />;
	toggleBlockType = (blockType) => {
		this.onChange(
			RichUtils.toggleBlockType(
				this.state.editorState,
				blockType
			)
		);
	}

	toggleInlineStyle = (inlineStyle) => {
		this.onChange(
			RichUtils.toggleInlineStyle(
				this.state.editorState,
				inlineStyle
			)
		);
	}

	getBlockStyle = (block) => {
		switch (block.getType()) {
			case 'blockquote':
				return 'RichEditor-blockquote';
			default:
				return null;
		}
	}
}

class StyleButton extends React.Component {
	constructor() {
		super();
		this.onToggle = (e) => {
			e.preventDefault();
			this.props.onToggle(this.props.style);
		};
	}

	render() {
		let className = 'style.RichEditor-styleButton';
		if (this.props.active) {
			className += ' style.RichEditor-activeButton';
		}

		return (
			<span className={className} onMouseDown={this.onToggle}>
              {this.props.label}
            </span>
		);
	}
}

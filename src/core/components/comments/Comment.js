import React from 'react';
import style from './Comments.css';
import CommentHeader from './CommentHeader';

const Comment = (props) => {
	let replies = [];
	if (props.replies) {
		// turn reply objects into React Comment components
		replies = props.replies.map(function (comment) {
				return (
					<Comment
						author={comment.author}
						date={comment.date}
						commentText={comment.commentText}
						replies={comment.replies}
						indentationLevel={props.indentationLevel + 1}
						key={comment.key}
					/>);
			}
		);
	}
	let indentation = props.indentationLevel * 30 + "px";
	let divStyle = {
		marginLeft: indentation
	};
	let divBorderStyle = {
		border: '1px solid black',
		margin: '5px',
		marginLeft: indentation
	};
	return (
		<div style={divBorderStyle} className={style.comment}>
			<CommentHeader author={props.author} date={props.date} indentationLevel={props.indentationLevel}/>
			<div style={divStyle} className={style.commentText}>{props.commentText}</div>
			{replies}
			<button style={divStyle}>replies</button>
		</div>
	);
}

Comment.propTypes = {
	author: React.PropTypes.string.isRequired,
	date: React.PropTypes.string.isRequired,
	commentText: React.PropTypes.string.isRequired,
	replies: React.PropTypes.array,
	indentationLevel: React.PropTypes.number.isRequired
};

export default Comment;


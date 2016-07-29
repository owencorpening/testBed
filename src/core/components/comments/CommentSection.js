import React from 'react';
import Comment from './Comment';

const CommentSection = (commentsTree) => {
	let i=1;
	let comments = commentsTree.comments.map(function(comment) {
		return (
			<Comment
				author={comment.author}
				date={comment.date}
				commentText={comment.commentText}
				replies={comment.replies}
				indentationLevel={i}
				key={i++}
			/>);
	});
	return (
		<div>
			{comments}
		</div>
	);
};

export default CommentSection;

let mockData = require('../../../data/MockData.json');
import React from 'react';
import CommentSection from './../components/comments/CommentSection';

const ShowCommentSection = () => {
	console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
	console.log(mockData);
	mockData.comments = convertKeys(mockData.comments);
	let divStyle = {
		'border': '1px solid black',
		'margin': '5px'
	};
	return (
		<div style={divStyle}>
			<CommentSection comments={mockData.comments}/>
		</div>
	);
}

function convertKeys(comments) {
	for(let i=0; i<comments.length; i++) {
		comments[i].key = parseInt(comments[i].key);
		if (comments[i].replies) {
			comments[i].replies = convertKeys(comments[i].replies);
		}
	}
	return comments;
}

export default ShowCommentSection;

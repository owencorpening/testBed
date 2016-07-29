import React from 'react';
import style from './Comments.css';
import moment from 'moment';

const CommentHeader = (props) => {
	"use strict";
	return (
		<div className={style.commentHeader}>
			<span className={style.commentHeaderAuthor}>
				{props.author}
			</span>
			<span className={style.commentHeaderDate}>
				{moment(props.date).format('MM-DD-YYYY ')}
			</span>
		</div>
	);
}

export default CommentHeader;

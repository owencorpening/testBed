import React from 'react';
import TinyMCE from 'react-tinymce';
import style from './ShowTinyMCE.css';

const ShowTinyMCE = () => {
	let divBorderStyle = {
		border: '1px solid black',
		margin: '5px',
		marginLeft: '15px'
	};

	// All the available buttons are listed here, note the top plugin called 'core'
	// http://archive.tinymce.com/wiki.php/Controls

	return (
		<div style={divBorderStyle} className={style.container}>
			<div style={divBorderStyle} className={style.divLeft}>
				this is a div left of the editor
			</div>

			<div className={style.divCenter}>
				<TinyMCE
					content="<p>This is the initial content of the editor</p>"
					config={{
						plugins: 'link image textcolor spellchecker',
						toolbar: 'bold italic underline | alignleft aligncenter alignright alignjustify | fontselect fontsizeselect | cut copy paste | bullist numlist | outdent indent | undo redo | forecolor backcolor | spellchecker | moxiemanager link image',
						menu: {}
					}}
					onChange={handleEditorChange}
				/>
			</div>

			<div style={divBorderStyle} className={style.divRight}>
				this is a div to the right of the editor
			</div>

		</div>
	);
}

function handleEditorChange(e) {
	console.log('Content was updated:', e.target.getContent());
}

export default ShowTinyMCE;

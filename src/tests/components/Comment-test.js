import React from 'react';
// import CommentSection from '../../core/components/comments/CommentSection';
import {shallow, mount, render} from 'enzyme';
import * as chai from 'chai';
// import GetMockData from './GetMockData';
let should = chai.should();

describe('CHAPTER__TITLE_COMPONENT', () => {
	describe('when_rendering_component_array_of_comments_are_rendered', () => {
		var props;
		var SUT;
		// let mockData = GetMockData();

		beforeEach(() => {
			props = {index: 1, title: 'Test Title', id: 1, isExpanded: false};
			// SUT = shallow(<CommentSection comments={mockData.comments}/>);
		});

		it('should render a DIV with an accord-title className', () => {
			// SUT.find('div.accord-title').length.should.equal(1);
		});

		it('should render a DIV with an accord-toggle className', () => {
			// SUT.find('div.accord-toggle').length.should.equal(1);
		});
		it('should render one anchor tag with an aria-expanded property with a value of false', () => {
			// SUT.find('a').node.props['aria-expanded'].should.equal(false);
		});
	});
});

import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NoteListItem from './NoteListItem.js';

Enzyme.configure({ adapter: new Adapter() });

if (Meteor.isClient) {
  describe('NoteListItem', function () {

    it('should render title and timestamp', function () {
      const title = "My title here";
      const updatedAt = 1527650545356;
      const wrapper = mount(<NoteListItem note={{ title, updatedAt }}/>);

      expect(wrapper.find('h5').text()).toBe(title);
      expect(wrapper.find('p').text()).toBe('5/29/18');
    });

    it('should set default title if no title set', function () {
      const wrapper = mount(<NoteListItem note={{}}/>);

      expect(wrapper.find('h5').text()).toBe('Untitled');
    });
  });
}

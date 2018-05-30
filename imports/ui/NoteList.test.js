import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { NoteList } from './NoteList.js';

Enzyme.configure({ adapter: new Adapter() });

const notes = [
  {
    id: 'noteId1',
    title: 'Test Title',
    body: 'Test Body',
    updatedAt: 0,
    userId: 'userId1'
  },
  {
    id: 'noteId2',
    title: 'Test Title2',
    body: 'Test Body2',
    updatedAt: 0,
    userId: 'userId2'
  }
];

if (Meteor.isClient) {
  describe('NoteList', function () {

    it('should render NoteList item for each note', function () {
      const wrapper = mount(<NoteList notes={notes}/>);

      expect(wrapper.find('NoteListItem').length).toBe(2);
      expect(wrapper.find('NoteListEmptyItem').length).toBe(0);
    });

    it('should render NoteListEmptyItem if 0 notes', function () {
      const wrapper = mount(<NoteList notes={[]}/>);

      expect(wrapper.find('NoteListItem').length).toBe(0);
      expect(wrapper.find('NoteListEmptyItem').length).toBe(1);
    });

  });
}

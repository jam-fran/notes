import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { NoteListHeader } from './NoteListHeader.js';
import { notes } from '../fixtures/fixtures.js';

Enzyme.configure({ adapter: new Adapter() });

if (Meteor.isClient) {
  describe('NoteListHeader', function () {
    let meteorCall;
    let Session;

    beforeEach(function () {
      meteorCall = expect.createSpy();
      Session = {
        set: expect.createSpy()
      };
    });

    it('should call meteorCall on click', function () {
      const wrapper = mount(<NoteListHeader meteorCall={meteorCall} Session={Session}/>);

      wrapper.find('button').simulate('click');
      meteorCall.calls[0].arguments[1](undefined, notes[0]._id);

      expect(meteorCall.calls[0].arguments[0]).toBe('notes.insert');
      expect(Session.set).toHaveBeenCalledWith('selectedNoteId', notes[0]._id);
    });

    it('should not set session for failed insert', function () {
      const wrapper = mount(<NoteListHeader meteorCall={meteorCall} Session={Session}/>);
      wrapper.find('button').simulate('click');

      meteorCall.calls[0].arguments[1]({}, undefined);

      expect(Session.set).toNotHaveBeenCalled();

    });



  });
}

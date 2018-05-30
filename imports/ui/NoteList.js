import React from 'react';
import { Meteor } from 'meteor/meteor';
import { PropTypes } from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';

import { Notes } from '../api/notes.js'
import NoteListHeader from './NoteListHeader.js';
import NoteListItem from './NoteListItem.js';

export const NoteList = (props) => {

  renderNoteList = () => {
    return props.notes.map((note) => {
      return <NoteListItem key={note._id} note={note}/>;
    });
  }

  return (
    <div>
      <NoteListHeader/>
      {this.renderNoteList()}
    </div>
  );
};

NoteList.propTypes = {
  notes: PropTypes.array.isRequired
};

export default withTracker(() => {
  Meteor.subscribe('notes');

  return {
    notes: Notes.find().fetch()
  };
})(NoteList);

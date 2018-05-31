import React from 'react';
import { Meteor } from 'meteor/meteor';
import PrivateHeader from './PrivateHeader';
import { Session } from 'meteor/session';
import NoteList from './NoteList.js';
import { Notes } from '../api/notes.js';
import Editor from './Editor.js';

export default class Dashboard extends React.Component {

  componentWillMount() {
      if (!Meteor.userId()){
        this.props.history.replace('/');
      } else {
        Session.set('selectedNoteId', this.props.match.params.id);
      }
  }

  componentWillUpdate(nextProps) {
    if (!Meteor.userId()){
      this.props.history.replace('/');
    }
  }

  render() {
    return (
      <div>
        <PrivateHeader title="Dashboard"/>
        <div className="page-content">
          <div className="page-content__sidebar">
            <NoteList/>
          </div>
          <div className="page-content__main">
            <Editor/>
          </div>
        </div>
      </div>
    );
  }
};

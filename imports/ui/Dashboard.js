import React from 'react';
import { Meteor } from 'meteor/meteor';
import PrivateHeader from './PrivateHeader';
import { Session } from 'meteor/session';
import NoteList from './NoteList.js';

export default class Dashboard extends React.Component {

  componentWillMount() {
      if (!Meteor.userId()){
        this.props.history.replace('/');
      } else {
        Session.set('selectedNoteId', this.props.match.params.id);
      }
  }

  render() {
    return (
      <div>
        <PrivateHeader title="Dashboard"/>
        <div className="page-content">
          <NoteList/>
        </div>
      </div>
    );
  }
};

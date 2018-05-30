import React from 'react';
import { Meteor } from 'meteor/meteor';
import PrivateHeader from './PrivateHeader';
import NoteList from './NoteList.js';

export default class Dashboard extends React.Component {

  componentWillMount() {
      if (!Meteor.userId())
          this.props.history.replace('/');
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

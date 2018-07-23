import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.js';
import { videoData } from '../lib/collections.js';

import './main.html';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});

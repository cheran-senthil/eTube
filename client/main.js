import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import App from '/imports/ui/App'
import Index from '/imports/ui/Index'
import Video from '/imports/ui/Video'

FlowRouter.route('/', {
  name: 'index',
  action () {
    mount(App, { content: <Index /> })
  }
});

FlowRouter.route('/video', {
  name: 'video',
  action (params, queryParams) {
    mount(App, { content: <Video id={queryParams.id} /> })
  }
});

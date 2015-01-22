import Ember from 'ember';
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';

var App;

module('Integration - User Login', {
  setup: function() {
    App = startApp();
    this.xhr                = sinon.useFakeXMLHttpRequest();
    this.server             = sinon.fakeServer.create();
    this.server.autoRespond = true;
    sinon.spy(Ember.$, 'ajax');

  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
}); 

//happy path
  test('logs in user and returns github username and token', function() {
    visit('/').then( function() {
      click('#login-form');
    });
  });


//sad path
// returns error message


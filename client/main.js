import { Template } from 'meteor/templating';
import { Notes } from '../lib/collections.js';
import './main.html';

/* global $ */

Template.body.helpers({
  // notes: [
  //   {text: "My note 1"},
  //   {text: "My note 2"},
  //   {text: "My note 3"}
  // ]
  
  notes(){
    return Notes.find({}, {sort: {"created_at": -1}});
  }
});

Template.add.events({
  'submit .add-form': function(){
    
    //Get input value
    event.preventDefault();
    const text = event.target.note.value;
    
    //Inset into DB
    Notes.insert({
      text: text,
      created_at: new Date()
    });
    
    //Clear form
    event.target.note.value = "";
    
    //Close modal
    $('#addNote').modal('close');
    
    return false;
  }
});
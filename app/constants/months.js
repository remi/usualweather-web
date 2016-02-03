import Ember from 'ember';

const Month = Ember.Object.extend({
  id: null,
  name: null,

  stringId: function() {
    return this.get('id').toString();
  }.property('id')
});

export default [
  Month.create({id: 1, name: 'january'}),
  Month.create({id: 2, name: 'february'}),
  Month.create({id: 3, name: 'march'}),
  Month.create({id: 4, name: 'april'}),
  Month.create({id: 5, name: 'may'}),
  Month.create({id: 6, name: 'june'}),
  Month.create({id: 7, name: 'july'}),
  Month.create({id: 8, name: 'august'}),
  Month.create({id: 9, name: 'september'}),
  Month.create({id: 10, name: 'october'}),
  Month.create({id: 11, name: 'november'}),
  Month.create({id: 12, name: 'december'})
];

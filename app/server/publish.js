Meteor.publish('ItemSets.id', function (id) {
  check(id, String);
  this.unblock();
  return ItemSets.find(new Meteor.Collection.ObjectID(id), { reactive: false });
});
Meteor.publish('ItemSets.last', function () {
  this.unblock();
  return ItemSets.find({}, { sort: { generationDate: -1 }, limit: 1 }, { reactive: false });
});

Meteor.publish('Downloads', function () {
  this.unblock();
  return Downloads.find();
});

Meteor.publish('Versions', function () {
  this.unblock();
  return Versions.find();
});

Meteor.publish('GuestbookEntries', function () {
  this.unblock();
  return GuestbookEntries.find({ approved: true });
});

Meteor.publish('TwitterAnnouncements.last', function () {
  this.unblock();
  return TwitterAnnouncements.find({}, { sort: { creationDate: -1 }, limit: 1 });
});

Meteor.publish('PatchVersions.limit', function () {
  this.unblock();
  return PatchVersions.find({}, { sort: { importDate: -1 }, limit: 10 }, { reactive: false });
});

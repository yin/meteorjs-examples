Colors = new Meteor.Collection("colors");

if (Meteor.isClient) {
  Template.color_list.colors = function() {
    return Colors.find({}, {sort: {likes: -1, name: 1}});
  };
}


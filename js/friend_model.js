import Backbone from 'backbone' ;

let FriendModel = Backbone.Model.extend({

  urlRoot: 'https://api.parse.com/1/classes/friendList',

  idAttribute: 'objectId'

});

export default FriendModel;
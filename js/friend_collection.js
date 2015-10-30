import Backbone from 'backbone';
import FriendModel from './friend_model';

let FriendCollection = Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/friendList' ,

  model: FriendModel,

  parse: function(data) {
    return data.results;
  }


});

export default FriendCollection;

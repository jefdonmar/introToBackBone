import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import FriendModel from './friend_model';
import FriendCollection from './friend_collection';
import FriendTemplate from './friend_template';


const APP_ID = 'qh4WkgaXFklvvODXdaWJfAZRYrhEfXnWQgCPol3q';
const API_KEY = 'RoF8zfy296MVOVIBSTW1VgSowPLMCb6X3B3enAXj';

$.ajaxSetup({
  
  headers: {
    'X-Parse-Application-ID': APP_ID,
    'X-Parse-REST-API-KEY':  API_KEY
  }

});

let friends = new FriendCollection();

function renderFriends() {

  let $ul = $('<ul></ul>');

  friends.each(function(friend) {

    let data = friend.toJSON();
    console.log('data', data);

    let $li = $(FriendTemplate(data));

    $ul.append($li);
    
  });

  $('.container').html($ul);

}

friends.fetch().then(renderFriends);

import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import DatajModel from './data_model';
import DatajCollection from './data_collection';
import DatajTemplate from './data_template';


const APP_ID = 'qh4WkgaXFklvvODXdaWJfAZRYrhEfXnWQgCPol3q';
const API_KEY = 'RoF8zfy296MVOVIBSTW1VgSowPLMCb6X3B3enAXj';

$.ajaxSetup({
  
  headers: {
    'X-Parse-Application-ID': APP_ID,
    'X-Parse-REST-API-KEY':  API_KEY
  }

});

let datajs = new DatajCollection();

function renderDataj() {

  let $ul = $('<ul></ul>');

  datajs.each(function(dataj) {

    let data = dataj.JSON();
    console.log('data', data);

    let $li = $(DatajTemplate(data));

    $ul.append($li);

  });

  $('container').html($ul);

}

dataj.fetch().then(renderDataj);

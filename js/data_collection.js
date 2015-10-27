import Backbone from 'backbone';
import DatajModel from './data_model';

let DatajCollection = Backbone.Model.extend({

  url: 'https://www.parse.com/apps/introtobackbone--2/collections' ,

  model: DatajModel,

  parse: function(data) {
    return data.results;
  }


});

export default DatajCollection;

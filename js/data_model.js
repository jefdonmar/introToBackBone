import Backbone from 'backbone' ;

let DatajModel = Backbone.Model.extend({

  urlRoot: 'https://www.parse.com/apps/introtobackbone--2/collections',

  idAttribute: 'objectId'

});

export default DatajModel;
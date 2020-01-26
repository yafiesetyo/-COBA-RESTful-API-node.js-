'use strict';

module.exports = function (app){
    var control = require('./controller');

    app.route('/').get(control.index);

    app.route('/users').get(control.users);

    app.route('/users/:id').get(control.cariOrang);

    app.route('/users').post(control.create);

    app.route('/users').put(control.update);

    app.route('/users').delete(control.delete);
}
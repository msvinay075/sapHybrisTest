'use strict';

module.exports = function(app) {
    var gitServiceCall = require('../controllers/gitController');

    app.route('/git/repos/:owner/:sortBy')
        .get(gitServiceCall.list_all_repo_username);

    app.route('/git/contributors/:owner/:repo')
        .get(gitServiceCall.list_all_contributors);
};
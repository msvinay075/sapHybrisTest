'use strict';
var request = require('request');

exports.list_all_repo_username = function(req, res) {
    let username = req.params.owner;
    let sortBy = req.params.sortBy;
    let baseurl = "https://api.github.com/users/" + username + "/repos?sort=" + sortBy;
    request({
        uri: baseurl,
        headers: {
            'User-Agent': 'request',
            "Accept": "application/json, text/plain, */*"
        }
    }).pipe(res);
};

exports.list_all_contributors = function(req, res) {
    let username = req.params.owner;
    let repo = req.params.repo;
    let baseurl = "https://api.github.com/repos/" + username + "/" + repo + "/contributors";
    request({
        uri: baseurl,
        headers: {
            'User-Agent': 'request',
            "Accept": "application/json, text/plain, */*"
        }
    }).pipe(res);
};
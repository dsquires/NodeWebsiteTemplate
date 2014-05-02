
exports.index = function(req, res){
    res.render('index', { isFrontPage: true });
    res.end();
};


var express = require('express');
var router = express.Router();

/* GET home page.
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
 */

 router.get('/', function(request, response){
 	response.render('index', {
 		title: "No hands no legs no worries!",
 		name: "Nick"

 	})
 })

module.exports = router;

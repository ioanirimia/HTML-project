var Customer = require('../models/customer');
module.exports = function(router){
    router.get('/customer', function (req, res){
        var customer = new Customer();
       //customer.firstnamae = req.body.firstname;
       //customer.lastname = req.body.lastname;
       //customer.phone = req.body.phone;
        customer.firstname = "test";
        customer.save(function(err, data){
            if(err)
                throw err;
            res.json(data);
        });
    })
}
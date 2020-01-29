//backendapp/route.js
//grab the nerd model we created
var About = require('./models/contacts');
module.exports = function(expobj){
    //server routes
    //handle api calls
    //autthentcation routes
    //sample api route
    expobj.delete('/api/abouts/:id',function(req, res){
        console.log('Deleted Data '+req.body.first_name)
         About.remove({_id: req.params.id},function(err,result){
             if(err){
                 res.json(err);
             }
             else{
                 res.json(result);
             }
        });
    });
     
    expobj.get('/api/abouts',function(req,res){
        About.find(function(err,abouts){
            if(err){
                res.json(err)
            }
            else{
                res.json(abouts)
            }
        })
    })
    expobj.get('/api/abouts/:id',function(req, res){
        About.find({_id:req.params.id} ,function(err,dtu){
            if(err){
                console.log(err);
            }
                res.json(dtu);
            });
    });
    expobj.put('/api/abouts/:id',function(req,res){
        console.log('Update Data'+req.body._id+req.body.first_name)
        About.update({_id: req.body._id},{$set:{first_name:req.body.first_name, last_name:req.body.last_name, contact: req.body.contact}},{multi:true},function(err,update){
            if(err){
                res.json(err)
            }
            else{
                res.json(update)
            }
        
        });
    });
    
    expobj.post('/api/abouts',function(req,res){

        console.log("\nFirst Name:"+req.body.first+"\nLast Name: "+req.body.last+"\nContact No: "+req.body.contact)

        let newcontact = new About({
            first_name: req.body.first,
            last_name: req.body.last,
            contact: req.body.contact,

        });

        newcontact.save(function(err, contact){
            if(err){
                res.json({msg:'Failed to add contact'})
            }
            else{
                res.json({msg:'Contact Added Successfully'})
            }
        });


    });

    //route to handle all angular requests
    expobj.get('*',function(req,res){
        res.sendFile('./public/index.html');
    });
};


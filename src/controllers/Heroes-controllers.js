const mongoose = require('mongoose');
const Heroes = mongoose.model('Heroes');


// (SELECT) Listando todos herois

exports.get = (req, res, next)=>{
    
  Heroes.find()
    
    .then((data)=>{
    
        res.status(201).send({data});
    
    }).catch((erro)=>{
    
        res.status(400).send({erro});
    
    });
}  

exports.getById = (req, res, next)=>{
    Heroes
     .findById(req.params.id)
     .then((data)=>{   
         res.status(201).send({data});   
     }).catch((erro)=>{   
         res.status(400).send({erro});
     
     });
 }

// (INSERT) Inserindo um herói

exports.post = (req, res, next) =>{
    var heroi = new Heroes(req.body);

    /*heroi.publishing_company = req.body.publishing_company;
    heroi.name = req.body.name;
    heroi.power = req.body.power;
    heroi.description = req.body.description;*/

    heroi.save().then(()=>{
    
        res.status(201).send({meessage : 'Herói cadastrado com sucesso'});
    
    }).catch((erro)=>{
    
        res.status(400).send({meessage : 'falha ao cadastrar o Herói', data : erro});
    
    });

    }; 

    //(UPDATE) Atualizando um herói
  
    exports.put = (req, res, next)=>{
        Heroes
        .findByIdAndUpdate(req.params.id,{
            $set: {
                publishing_company : req.body.publishing_company,
                name : req.body.name,
                power : req.body.power,
                description: req.body.description
            }
            
        })
        .then((data)=>{   
            res.status(201).send({
                meessage : 'Dados do Herói atualizado com sucesso'
            });   
        }).catch((erro)=>{   
            res.status(400).send({
                meessage : 'falha ao atualizar os dados do Herói',
                data : e
            });
        
        });
    } 
  //(DELETE) Deletando um herói
  exports.delete = (req, res, next)=>{
    Heroes
    .findByIdAndRemove(req.params.id)
    // ou .findByIdAndRemove(req.body.id)
    .then(()=>{   
        res.status(201).send({
            meessage : 'Herói removido com sucesso'
        });   
    }).catch((erro)=>{   
        res.status(400).send({
            meessage : 'falha ao remover Herói',
            data : e
        });
    
    });
}



/* Métodos de SELECT
    exports.getByTag = (req, res, next)=>{
        Heroes
        .find({
            tags: req.params.tag,
            active: true
        }, 'title description price slug tags')
        .then((data)=>{
        
            res.status(201).send({data});
        
        }).catch((erro)=>{
        
            res.status(400).send({erro});
        
        });
    }

   
    exports.getBySlug = (req, res, next)=>{
        Produto
        .findOne({
            //pegando pelo slug do produto
            slug : req.params.slug,
            active: true
        }, 'title description price slug tags')
        .then((data)=>{
        
            res.status(201).send({data});
        
        }).catch((erro)=>{
        
            res.status(400).send({erro});
        
        });
    }

 
  

exports.delete = (req, res, next) =>{
    res.status(200).send(req.body);
}; 

*/
const express = require('express'); 
const router = express.Router(); 
const controller = require('../controllers/Heroes-controllers'); 

//Listar
router.get('/',controller.get);
router.get('/:id',controller.getById);
//Inserir
router.post('/',controller.post);
//Deletar
router.delete('/:id',controller.delete);
//Atualizar
router.put('/:id',controller.put);

/*
router.get('/:slug',controller.getBySlug);

router.get('/tags/:tag',controller.getByTag); */

module.exports = router
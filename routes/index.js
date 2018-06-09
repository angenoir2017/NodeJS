var express = require('express');
var router = express.Router();
var posts = require('../controllers/posts');
var clients = require('../controllers/client');
var employes = require('../controllers/employe');
var transactions = require('../controllers/transaction');

/* Pour les posts */
router.get('/posts', posts.getPosts);
router.get('/post/:id', posts.getPost);
router.post('/post/create', posts.createPost);
router.put('/post/:id', posts.updatePost);
router.delete('/post/:id', posts.deletePost);

/* Pour les clients */
router.get('/clients', clients.getClients);
router.get('/client/:id', clients.getClient);
router.post('/client/create', clients.createClient);
router.put('/client/:id', clients.updateClient);
router.delete('/client/:id', clients.deleteClient);

/* Pour les employe */
router.get('/employes', employes.getEmployes);
router.get('/employe/:id', employes.getEmploye);
router.post('/employe/create', employes.createEmploye);
router.put('/employe/:id', employes.updateEmploye);
router.delete('/employe/:id', employes.deleteEmploye);

/* Pour les transation */
router.get('/Transactions', transactions.getTransactions);
router.get('/Transaction/:id', transactions.getTransaction);
router.post('/Transaction/create', transactions.createTransaction);
router.put('/Transaction/:id', transactions.updateTransaction);
router.delete('/Transaction/:id', transactions.deleteTransaction);

module.exports = router;

var express = require('express');
var router = express.Router();
var posts = require('../controllers/posts');
var clients = require('../controllers/client');
var employes = require('../controllers/employe');
var transactions = require('../controllers/transaction');
// Multer
var multer = require('multer');
//definition du stockage
var storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './uploads/');
  },
  filename: function(req, file, cb){
    cb(null, new Date().toISOStringfile() + file.originalname);
  }
});
//Filrage par rapport au type du fichier(jpeg, png)
var fileFilter = (req, file, cb)=>{
  if (file.mimetype === 'image.jpeg' || file.mimetype === 'image/png'){
      cb(null, true);
  }else{
    cb(null, false);
  }
};

//taille du fichier
var upload = multer({storage: storage, limits: {
  fileSize: 1024 * 1024 * 5
},
fileFilter: fileFilter
});

/* Pour les posts */

router.get('/posts', posts.getPosts);
router.get('/post/:id', posts.getPost);
router.post('/post/create', upload.single('postImage'), posts.createPost);
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

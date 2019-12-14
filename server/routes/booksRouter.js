const { Router } = require('express');
const booksController = require('../controllers/booksController');

const router = new Router();

router.get('/', booksController.getBooks);
router.get('/:id', booksController.getOne);
router.post('/add', booksController.addBook);
router.delete('/delete/:id', booksController.deleteBook);
router.patch('/edit/:id', booksController.updateBook);

module.exports = router;
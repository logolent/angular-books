const { Router } = require('express');
const apiRouter = require('./booksRouter');

const router = new Router();

router.use('/api/books', apiRouter);

/* router.use((req, res) => {
    res.status(404).render('pages/notFound');
}); */

module.exports = router;
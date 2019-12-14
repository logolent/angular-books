const booksRepository = require('../repositories/booksRepository');

const getBooks = async (req, res) => {
    const books = await booksRepository.getAll();
    res.status(200).json({
        success: true,
        data: books
    });
}

const getOne = async (req, res) => {
    const book = await booksRepository.get(req.params.id);
    res.status(200).json({
        success: true,
        data: book
    });
}

const addBook = async (req, res) => {
    try {
        if (req.body.name && req.body.author) {
            const name = req.body.name.trim();
            const author = req.body.author.trim();
            const book = await booksRepository.add({name, author});
            res.status(201).json({
                success: true,
                data: book
            });
        } else {
            res.status(400).json({
                success: false,
                error: 'Wrong body format'
            });
        }
    } catch (e) {
        res.status(500).json({
            success: false,
            error: e.message
        });
        //throw e;
    }
}

const deleteBook = async (req, res) => {
    await booksRepository.delete(req.params.id);
    res.status(200).json({
        success: true
    });
}

const updateBook = async (req, res) => {
    try {
        let name;
        let author;
        (req.body.name) ? name = req.body.name.trim() : name = null;
        (req.body.author) ? author = req.body.author.trim() : author = null;
        const changes = await booksRepository.update(req.params.id, {name, author});
        res.status(200).json({
            success: true,
            data: changes
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            error: e.message
        });
        //throw e;
    }
}

module.exports = {
    getBooks,
    getOne,
    addBook,
    deleteBook,
    updateBook
}
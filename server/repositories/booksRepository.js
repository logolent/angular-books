const path = require('path');
const uuid = require('uuid/v1');
const { readFile, writeFile } = require('../utils/filesHandler');
const { isDuplicate } = require('../utils/validation');

const FILE_PATH = path.resolve(path.dirname(require.main.filename), 'data', 'books.json');

const booksRepository = {
    async getAll() {
        return await readFile(FILE_PATH) || [];
    },

    async get(id) {
        const books = await this.getAll();
        return books.find(book => book.id === id);
    },

    async add(body) {
        const books = await this.getAll();
        const newBook = {
            id: uuid(),
            name: body.name,
            author: body.author
        };

        return new Promise(async (resolve, reject) => {
            if (!isDuplicate(newBook.name, books)) {
                books.push(newBook);
                await writeFile(FILE_PATH, books);
                resolve(newBook);
            } else {
                reject(new Error(`Book with name ${newBook.name} already exists`));
            }
        })
    },

    async delete(id) {
        const books = await this.getAll();

        const index = books.findIndex(item => item.id === id);
        if (index !== -1) {
            books.splice(index, 1);
            await writeFile(FILE_PATH, books);
        }
    },

    async update(id, body) {
        const books = await this.getAll();
        const index = books.findIndex(item => item.id === id);

        return new Promise(async (resolve, reject) => {
            if (index === -1) {
                reject(new Error(`Book with id ${id} not found`));
            } else if (isDuplicate(body.name, books)) {
                reject(new Error(`Book with name ${body.name} already exists`));
            } else {
                const oldName = books[index].name;
                const oldAuthor = books[index].author;
    
                books[index].name = body.name || oldName;
                books[index].author = body.author || oldAuthor;
                await writeFile(FILE_PATH, books);
    
                const changes = {
                    id: id,
                    oldName,
                    oldAuthor,
                    newName: books[index].name,
                    newAuthor: books[index].author
                }
    
                resolve(changes);
            }
        })
    }
}

module.exports = booksRepository;
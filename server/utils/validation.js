module.exports.isDuplicate = (bookName, allBooks) => {
    return allBooks.find(item => item.name === bookName);
};
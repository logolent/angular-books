const path = require('path');
const fs = require('fs').promises;

async function writeFile(filePath, content) {
    const dirPath = path.dirname(filePath);
    const dirExists = await exists(dirPath);
    if (!dirExists) {
        await fs.mkdir(dirPath, { recursive: true });
    }

    const jsonContent = JSON.stringify(content);
    await fs.writeFile(filePath, jsonContent);
}

async function readFile(filePath) {
    const fileExists = await exists(filePath);
    if (!fileExists) {
        return null;
    }

    const content = await fs.readFile(filePath);
    return JSON.parse(content);
}

async function exists(targetPath) {
    try {
        const stats = await fs.stat(targetPath);
        return !!stats;
    } catch (e) {
        if (e.code === 'ENOENT') {
            return false;
        }
        throw e;
    }
}

module.exports = {
    writeFile,
    readFile, 
    exists
}
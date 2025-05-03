// index.js
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // Middleware to parse JSON bodies

const books = [{ id: 1, title: '1984', author: 'George Orwell' }, { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' }];

app.get('/', (req, res) => {
    console.log('Request received!');
    res.send('Hello Express!');
});

app.get('/user/profile', (req, res) => {
    const checkAuth = false;
    if (checkAuth) {
        res.send('User Profile');
    } else {
        res.status(401).send('Unauthorized!');
    }
});

app.get('/admin/dashboard', (req, res) => {
    const checkAuth = true;
    if (checkAuth) {
        res.send('Admin Dashboard');
    } else {
        res.status(403).send('Forbidden!');
    }
});

app.get('/books', (req, res) => {
    console.log('Books list requested!');
    res.json(books);
});

app.post('/message', (req, res) => {
    console.log('Message received!');
    const { message } = req.body;
    res.send(`Message: ${message}`);
});

app.post('/books', (req, res) => {
    console.log('Book received!');
    if (!req.body.title || !req.body.author) {
        return res.status(400).send('Title and author are required!');
    } else {
        const newBook = { id: books.length + 1, ...req.body };
        books.push(newBook);
        res.status(201).json(newBook);
    }
});

app.put('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find((b) => b.id === bookId);

    if (!book) {
        return res.status(404).send('Book not found!');
    }

    const { title, author } = req.body;

    if (!title || !author) {
        return res.status(400).send('Title and author are required!');
    }

    // อัปเดตค่าของหนังสือ
    book.title = title;
    book.author = author;

    res.json(book);
});

app.delete('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const bookIndex = books.findIndex((book) => book.id === bookId);

    if (bookIndex === -1) {
        return res.status(404).send('Book not found!');
    }

    // ลบหนังสือออกจาก array
    books.splice(bookIndex, 1);

    // ส่งสถานะ 204 (ไม่มีเนื้อหา)
    res.status(204).send();
});

app.post('/books/update/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find((b) => b.id === bookId);

    if (!book) {
        return res.status(404).send('Book not found!');
    }

    const { title, author } = req.body;

    if (!title || !author) {
        return res.status(400).send('Title and author are required!');
    }

    // อัปเดตค่าของหนังสือ
    book.title = title;
    book.author = author;

    res.json(book);
});

app.post('/books/delete/:id', (req, res) => {  
    
    const bookId = parseInt(req.params.id);
    const initialBookCount = books.length; // เก็บจำนวนหนังสือก่อนลบ
    const bookIndex = books.findIndex((book) => book.id === bookId);

    if (bookIndex === -1) {
        return res.status(404).send('Book not found!');
    }

    // ลบหนังสือออกจาก array
    books.splice(bookIndex, 1);

    // ส่งสถานะ 204 (ไม่มีเนื้อหา)
    res.status(204).send();
});

app.get("/search", (req, res) => {
    const { query } = req.query;
    console.log(req);
    res.send(`Search query: ${query}`);
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

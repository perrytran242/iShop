const express = require('express');
const cors = require('cors');
const { resolve } = require('path');
const PORT = process.env.PORT || 9000;

require('./db');

const app = express();

// disable when not testing.
app.use(cors());
app.use(express.urlencoded( {extended:false} ));
app.use(express.json());

app.use(express.static(resolve(__dirname, 'client', 'dist')));

require('./routes')(app);

app.get('/', (req, res) => {
    res.send('<h1>Server Running!</h1>')
});

app.listen(PORT, () => {
    console.log('Server running on PORT: ' + PORT);
}).on('error', (err) => {
    console.log('Listen Error: You already have a server running on PORT: ' + PORT);
}); 
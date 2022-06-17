const express = require('express');


const app = express();

app.use(express.json({extended: true}));

app.use('/api/city', require('./routes/city.routes'));
app.use('/api/time', require('./routes/time.routes'));


const PORT = 5000;
async function start() { 
    try {
        app.listen(PORT, () => console.log(`App has been started on ${PORT}...`));

    } catch (e) {
        console.log('Server error', e.message);
        process.exit(1);
    }
}

start();
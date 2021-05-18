const express = require('express');
const usersRoutes = require('./users.route');
const imageRoutes = require('./image.route');

const router = express.Router();

router.get('/', (req, res) => res.send('Welcome to My App !!'));

router.use('/v1/users', usersRoutes);

router.use('/v1/users',imageRoutes);


module.exports = router;
const Router = require('express');
const router = new Router()
const CommentController= require ('./../controller/CommentController')

router.post('/add',CommentController.add);
router.put('/put/:id', CommentController.put)
router.get('/get/:id',CommentController.get);
router.delete('/delete/:id', CommentController.delete)
router.get('/list',CommentController.list)

module.exports = router
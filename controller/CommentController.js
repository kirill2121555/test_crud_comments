const CommentService = require('../services/CommentService')

class CommentController {

    async add(req, res) {
        try {
            await CommentService.CreateComment(req.body)
            res.status(201).json()
        } catch (error) {
            console.log(error.message)
            res.status(500).json()
        }
    }

    async list(req, res) {
        try {
            const comments = await CommentService.ListComment(req.query);
            res.status(200).json(comments)
        } catch (error) {
            console.log(error.message)
            res.status(500).json()
        }
    }
    async get(req, res) {
        try {
            const comment = await CommentService.OneComment(req.params.id)
            if (comment.length === 0) return res.status(404).json()
            return res.status(200).json(comment)
        } catch (error) {
            console.log(error.message)
            res.status(500).json()
        }
    }
    async put(req, res) {
        try {
            await CommentService.UpdateComment(req.body, req.params.id);
            return res.status(204).json();
        } catch (error) {
            console.log(error.message)
            res.status(500).json()
        }
    }
    async delete(req, res) {
        try {
            await CommentService.DeleteComment(req.params.id);
            return res.status(204).json()
        } catch (error) {
            console.log(error.message)
            res.status(500).json()
        }
    }
}

module.exports = new CommentController();


const db = require('./DbService')

class CommentService {
    async CreateComment(comment) {
        try {
            await db.query(`INSERT INTO comments (name_author,text) VALUES('${comment.name_author}', '${comment.text}')`)
        } catch (error) {
            throw error
        }
    }

    async ListComment(query) {
        try {
            if (!Number.isInteger(+query.page) || !Number.isInteger(+query.limit)) {
                throw new Error('query not a number')
            }
            const page = query.page || 1
            const limit = query.limit || 9
            let offset = page * limit - limit

            const comments = await db.query(`SELECT * FROM comments LIMIT ${limit} OFFSET ${offset}`)
            return comments;
        } catch (error) {
            throw error
        }
    }

    async OneComment(id) {
        try {
            const comment = await db.query(`SELECT * FROM comments WHERE id=${id}`)
            return comment;
        }
        catch (error) {
            throw error
        }
    }

    async UpdateComment(comment, id) {
        try {
            await db.query(`UPDATE comments SET name_author='${comment.name_author}',text='${comment.text}' WHERE id=${id}`)
        } catch (error) {
            throw error
        }
    }

    async DeleteComment(id) {
        try {
            await db.query(`DELETE FROM comments WHERE id=${id}`)
        } catch (error) {
            throw error
        }
    }
}

module.exports = new CommentService();
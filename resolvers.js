const Post = require('./models/Post.model')

const resolvers = {
    Query: {
        hello: () => {
            return "Hello world"
        },
        getAllPost: async () => {
            return await Post.find()
        }
    },
    Mutation: {
        createPost: async (parent, args, context, info) => {
            const { title, description } = args.post
            const post = new Post({ title, description })
            await post.save()
            return post
        }
    }
}

module.exports = resolvers
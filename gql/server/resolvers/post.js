
const {gql} = require('apollo-server-express');
const {posts} = require('../temp');


// queries
const totalPosts = () => posts.length;

const allPosts = () => posts;

// mutations

const newPost = (parent, args) => {
    // create new post object
    // console.log(args);
    const {title, description} = args.input

    const post = {
        id: posts.length + 1,
        title,
        description
        // ...args.input
    };
    // push new post object to post array
    posts.push(post)
    return post;
};

module.exports = {
    Query: {
        totalPosts,
        allPosts
        
    },

    Mutation : {
        newPost
    }
};

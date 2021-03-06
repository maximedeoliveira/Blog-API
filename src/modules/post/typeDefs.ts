import { gql } from 'apollo-server';

export const typeDefs = gql`
    type Post {
        id: String!
        title: String!
        slug: String!
        content: String!
        published: Boolean!
        createdAt: String!
        updatedAt: String!
        publishedAt: String
        user: User
        userId: String!
        comment: [Comment!]
    }

    type Query {
        getAllPosts(published: Boolean): [Post!]
        getPostById(id: String!): Post!
    }

    type Mutation {
        createPost(
            title: String!
            slug: String!
            content: String!
            published: Boolean
        ): Post!
        updatePost(
            id: String!
            title: String
            slug: String
            content: String
            published: Boolean
        ): Post!
    }
`;

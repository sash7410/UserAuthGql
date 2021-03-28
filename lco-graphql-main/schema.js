import {buildSchema} from "graphql";

const schema =buildSchema(`
    type User {
        id: ID
        userName: String
        email: String
        role: Role
        password: String
        posts: [Post]
    }
    type Post {
        pid: ID
        title: String
        slug: String
        views: Int
        body: String
        published: Boolean
        user: User
    }
  
    enum Role {
        ADMIN
        AUTHOR
    }
    
    type Query {
        getUser(id: ID): User
        getPost(pid: ID): Post
    }
    
    input UserInput{
        id: ID
        userName: String
        email: String!
        role: Role
        password: String
        posts: [PostInput!]
    }
    
    input PostInput{
        pid: ID
        title: String
        slug: String
        views: Int
        body: String
        published: Boolean
        user: UserInput
    }
    
    type Mutation {
         createUser(input: UserInput): User
         createPost(input: PostInput): Post
    }
`)
export  default schema;

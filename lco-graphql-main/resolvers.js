import {nanoid} from 'nanoid'

class User{
    constructor(id,{
        userName, email, role, password, posts
    }) {
        this.id=id
        this.userName=userName
        this.email=email
        this.role=role
        this.password=password
        this.posts=posts
    }

}

const userholder = {}

const resolvers = {
    getUser : ({ id }) => {
return new User(id, userholder[id])
    },
    createUser: ({ input }) =>{
        let id=nanoid()
        userholder[id]= input
        return new User(id, input)
    }
}
export default  resolvers;


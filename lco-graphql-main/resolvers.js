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


class Post{
    constructor(pid,{
        title, slug, views, body, published, user
    }) {
        this.pid=pid
        this.title=title
        this.slug=slug
        this.views=views
        this.body=body
        this.published=published
        this.user=user
    }
}

const userholder = {}
const postholder = {}

const resolvers = {
    getUser : ({ id }) => {
return new User(id, userholder[id])
    },
    createUser: ({ input }) =>{
        let id=nanoid()
        userholder[id]= input
        return new User(id, input)
    },
    createPost: ({ input }) =>{
        let pid=nanoid()
        postholder[pid]= input
        return new Post(pid, input)
    },
    getPost : ({ pid }) => {

        return new Post(pid, postholder[pid])
    }
}
export default  resolvers;

/*
* class User{
    constructor(id,{
        userName, email, role, password, posts
    }) {
        this.id=id
        this.userName=userName
        this.email=email
        this.role=role
        this.password=password
        postholder.forEach(element => {
            if(element.)
            console.log(element);
        });
        for(x:postholder)
        this.posts=posts
    }

}*/

/*
* mutation{
  createPost(input: {
    title: "harryp"
  	slug: "sashankrm11@gmail.com"
    views: 1
    body: "123asdsa45"
    published: true

  }){
    pid,
    title
  }
}
* */
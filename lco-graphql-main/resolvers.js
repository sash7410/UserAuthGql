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
    getAllUsers : () => {
        var list = [];
        for (let [key, value] of Object.entries(userholder)) {
           // console.log(value);
            list.push(new User(key, value));
        }
        //list.push(new User(id, userholder[id]));
        return list
    },
    createUserAndPost: ({ input }) =>{
        let id=nanoid()
        userholder[id]= input
        return new User(id, input)
    },
    createPost: ({ input }) =>{
        let pid=nanoid()
        let uid=input.userId;
        postholder[pid]= input

        if (typeof userholder[uid].posts !== 'undefined' && userholder[uid].posts.length > 0)
        {
            userholder[uid].posts.push(new Post(pid, input));
        }
        else{
            var x = [];
            x.push(new Post(pid, input));
            userholder[uid].posts=x;
        }
        console.log(userholder[uid].posts)
        return new Post(pid, input)
    },
    /*createUserWithPid: ({ input }) =>{
        let pid=input.get().postId;
        let post=this.getPost(pid);

        postholder[pid]= input
        UserInput
        return new Post(pid, input)
    },*/
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
mutation{
  createUserAndPost(input: {
    userName: "sashankRm"
  	email: "sashankrm11@gmail.com"
    role: ADMIN
    password: "12345"
  }){
    id,
    userName
  }
}
* mutation{
  createPost(input: {
    title: "harryp"
  	slug: "sashankrm11@gmail.com"
    views: 1
    body: "123asdsa45"
    published: true
    userId:"kIORegwiWZEGGuyDmf4Fg"

  }){
    pid,
    title
  }
}
*
* ,
    getAllUsers : () => {
        var list = [];
        for (const property in userholder) {
            console.log(`${property}: ${userholder[property]}`);
            list.push(new User(property, userholder[property]));

        }
        list.push(new User(id, userholder[id]));
        return list
    }
    *
    * query{
  getUser(id: "aif8-Z32kUovE4bSG-7hP"){
    id
  	userName
    posts {
      pid
      title
      slug
      views
      body
      published
    }
    password
  }
}
* */
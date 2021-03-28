import express from 'express'
import resolvers from "./resolvers";
import schema from "./schema";

import  {graphqlHTTP} from "express-graphql";

const app =express()

app.get("/", (req,res)=>{
    res.send("dhjfgj")
})
//const root={lco: () =>console.log("learncodeonline.js")}//wtf is this
const root=resolvers
app.use('/graphql',graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(8083,()=>console.log("running at 8083-main"))
/*
* mutation{
  createCourse(input: {
    courseName: "JS Bootcamp"
  	price: 199
    stack: MOBILE
    teachingAssists: [
      {
        firstName: "hitesh"
        lastName: "lol"
        experience: 1
      },
      {
        firstName: "lollol"
        lastName: "lol656"
        experience: 2
      }

    ]
  }){
    id,
    courseName
  }
}
*
* query{
  getCourse(id: "fMEqIxPi3SYQRfkqS8VbX"){
    id
    teachingAssists{
      experience
    }
  }
}
*
*
* mutation{
  createUser(input: {
    userName: "sashankRm"
  	email: "sashankrm11@gmail.com"
    role: ADMIN
    password: "12345"
    posts: [
      {
        pid: 1
        title: "lol"
        slug: "jhgffj"
        views: 2
        body: "lojkhl"
        published: true
      }

    ]
  }){
    id,
    userName
  }
}
*
* */
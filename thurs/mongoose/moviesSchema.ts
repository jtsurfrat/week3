/// notes of what a schema in mongoose

import * as mongoose from 'mongoose';
//
// //Example of a schema in mongoose
//
// let movieSchema = new mongoose({
//   title: {
//     type: String,
//     require: true
//   },
//   dateReleaseed: {
//     type: Date,
//     required: true
//   },
//   rating: {
//     enum: ["G", "PG", "R"],
//     type: String,
//     required: true
//   }
// })

// Another Example of schema and using schema to create a document

let actorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 10
  },
  lastName: {
    type:String,
    required: true,
    validate: {
      validator: (value) =>  value !== "Hamil",
      message: "{VAlUE} is not an actor"
    },
  },
  hasAcademyAward: {
    type: Boolean,
    default: false
  }
})

let Actor = mongoose.model("Actor", actorSchema);
//export default Actor;

// Actor.create({
//   firstName: "Carrie",
//   lastName: "Fisher"
// },
// {
//   firstName: "Harrison",
//   lastName: "Ford"
// }).then(() => {
//   console.log("Actor Created")
// }).catch((err) => {
//   console.log(err)
// })

export default Actor;

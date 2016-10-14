import * as mongoose from 'mongoose';

export interface IAnimal extends mongoose.Document {
  name: string;
  kind: 'bear' | 'cat' | 'horse';
}

// let AnimalSchema = new mongoose.Schema({
//   name: {
//     type:String,
//     require: true,
//     minlength: 3
//   },
//   kind: {
//     enum: ['bear', 'cat', 'horse'],
//     type: String,
//     require: true
//   }
// })

let AnimalSchema = new mongoose.Schema({
  name: {
    type:String,
    required:[true, 'Animal name is required!'],
    minlength:[3, 'Animal name must be 3 characters!']
  },
  kind: {
    enum:{
      values:['bear', 'cat', 'horse'],
      message:'Kind must be bear, cat, or horse!'
    },
    type: String,
    required: [true, 'Animal kind is required!']
  }
});

export default mongoose.model<IAnimal>('Animal', AnimalSchema);

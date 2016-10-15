import * as mongoose from 'mongoose';
import {IMovie} from './moviesModel';

export interface ICatergory extends mongoose.Document {
  name: string;
  movies: IMovie[]
}

let categorySchema = new mongoose.Schema({
  name: {
    type:String,
    required:true
  },
  movies : [{type: mongoose.Schema.Types.ObjectId, ref: "Movie"}]
});

export default mongoose.model<ICatergory>('Category', categorySchema);

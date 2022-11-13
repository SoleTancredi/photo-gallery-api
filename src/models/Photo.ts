import {Schema, model, Document} from 'mongoose';

//description
const schema = new Schema({
    title: String, // s mayuscula porque se esta trabajando con el esquema de mongoose
    description: String,
    imagePath: String
});

interface IPhoto extends Document {
    title: string;
    description: string;
    imagePath: string;
}

export default model<IPhoto>('Photo', schema);
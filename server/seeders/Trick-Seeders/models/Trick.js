import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const TrickDataSchema = new Schema(
    {
        name: {
            type: String,
        },
        difficulty: {
            type: Number,
        },
        stance: {
            type: String,
        },
        bodyVarial_id: {
            type: Schema.Types.ObjectId
        },
        boardRotation_id: {
            type: Schema.Types.ObjectId
        },
        flip_id: {
            type: Schema.Types.ObjectId
        },
        
    },
    {
        toJSON: {
          getters: true
        }
      }
);



// create the Trick model using Trick
const TrickData = model('TrickData', TrickDataSchema);

export default TrickData;
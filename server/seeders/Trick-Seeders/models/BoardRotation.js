import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const BoardRotationSchema = new Schema(
    {
        type: {
            type: String,
        },
        degrees: {
            type: Number,
        }
    },
    {
        toJSON: {
          getters: true
        }
      }
);



// create the Trick model using Trick
const BoardRotation = model('BoardRotation', BoardRotationSchema);

export default BoardRotation;
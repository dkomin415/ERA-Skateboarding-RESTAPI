import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const BodyVarialSchema = new Schema(
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
const BodyVarial = model('BodyVarial', BodyVarialSchema);

export default BodyVarial;
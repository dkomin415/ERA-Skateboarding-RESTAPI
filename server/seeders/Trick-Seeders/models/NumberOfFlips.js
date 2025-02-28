import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const NumberOfFlipsSchema = new Schema(
    {
        numberType: {
            type: String,
        },
        number: {
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
const NumberOfFlips = model('NumberOfFlips', NumberOfFlipsSchema);

export default NumberOfFlips;
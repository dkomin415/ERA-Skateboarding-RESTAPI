import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const FlipSchema = new Schema(
    {
        type: {
            type: String,
        },
        numberOfFlips_id: {
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
const Flip = model('Flip', FlipSchema);

export default Flip;
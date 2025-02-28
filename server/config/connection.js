import mongoose from 'mongoose';

// db connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ERA-Skateboarding', {

}).then(() => {
    console.log('Connected to DB');
}).catch((err) => {
    console.log('error', err);
});

// logs mongo queries being executed
mongoose.set('debug', true);

export default mongoose.connection;

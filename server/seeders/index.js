import seedTricks from "./Trick-Seeders/index.js"; 
import db from '../config/connection.js'

seedTricks().then(() => {
  db.close();
});
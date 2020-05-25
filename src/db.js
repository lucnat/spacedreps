
const low = require('lowdb')
const LocalStorage = require('lowdb/adapters/LocalStorage')
const adapter = new LocalStorage('db');
const db = low(adapter);

window.db = db;

db.defaults({ 
    cards: [],
    profile: {}
}).write()


// const state = db.getState();
// console.log(state);

export default db;

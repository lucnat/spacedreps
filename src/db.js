
import firebaseApp from './firebaseApp'

const db = firebaseApp.firestore();

/*
  Luc's handy wrappers
  ====================

  Usage:

    DB.getAll('mushrooms',docs => {console.log(docs)})        returns all docs
    DB.getOne('mushrooms',id,doc => {console.log(doc)})     returns one doc by id

*/

function listenToAll(collName, onUpdate) {
  db.collection(collName).onSnapshot(function(querySnapshot) {
    let docs = [];
    querySnapshot.forEach(function(doc) {
      docs.push({id: doc.id, ...doc.data()});
    });
    onUpdate(docs);
  });
}

function listenToOne(collName, id, onUpdate) {
  db.collection(collName).doc(id).onSnapshot(doc => {
    const data = doc.data();
    onUpdate({id, ...data});
  })
}

function listenToUser(onUpdate) {
  firebaseApp.auth().onAuthStateChanged(function(user) {
    onUpdate(user)
  });
}

function getAll(collName,callback) {
  db.collection(collName).get().then(querySnapshot => {
    const docs = querySnapshot.docs.map(doc => { return {id: doc.id, ...doc.data()} });
    callback(docs);
  }); 
}

function getOne(collName, id, callback) {
  db.collection(collName).doc(id).get().then(doc => {
    const data = doc.data();
    callback({id, ...data});
  })
}

const DB = {
  db,
  getAll,
  getOne,
  listenToAll,
  listenToOne,
  listenToUser,
}

window.DB = DB;

export default DB;

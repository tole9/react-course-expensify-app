import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

////// FIREBASE 101 ///////
//////////////////////////

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         })
//         console.log(expenses);
//     });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         })
//         console.log(expenses);
//     });

// database.ref('expenses').push({
//     description: 'opis',
//     note: 'nota',
//     amount: 5,
//     createdAt: '45645456'
// });


///////////////////////////////////

// database.ref('notes').push({
//     title: 'To Do',
//     body: 'Go for a run v2'
// });


// database.ref('notes/-L2Fd5xasbq9OHrogFBV').remove();
// database.ref().set({
//     name: 'Ante Tole',
//     age: 22,
//     stressLevel: 4,
//     job: {
//         title: 'Frontend developer',
//         company: 'Tole companija'
//     },
//     location: {
//         city: 'Djakovo',
//         country: 'Croatia'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('This failed', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Google',
//     'location/city': 'Zagreb'
// });

// database
//     .ref()
//     .remove()
//     .then(() => {
//         console.log('data removed');
//     })
//     .catch((e) => {
//         console.log('Did not remove data', e);
//     })

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     })

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

// database.ref().on('value', (snapshot) => {
//     console.log(`${snapshot.val().name} is ${snapshot.val().job.title} at ${snapshot.val().job.company}.`);
// });

// database.ref().update({
//     name: 'Tole'
// });
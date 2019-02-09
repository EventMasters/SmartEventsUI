const prodConfig = {
    apiKey: "AIzaSyCbidZdWThObxft8oW3rYP8D0uDpSNy9f0",
    authDomain: "smartevents-6ba15.firebaseapp.com",
    databaseURL: "https://smartevents-6ba15.firebaseio.com",
    projectId: "smartevents",
    storageBucket: "smartevents.appspot.com",
    messagingSenderId: "263749449553"
};

const devConfig = {
    apiKey: "AIzaSyCbidZdWThObxft8oW3rYP8D0uDpSNy9f0",
    authDomain: "smartevents-6ba15.firebaseapp.com",
    databaseURL: "https://smartevents-6ba15.firebaseio.com",
    projectId: "smartevents",
    storageBucket: "smartevents.appspot.com",
    messagingSenderId: "263749449553"
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;

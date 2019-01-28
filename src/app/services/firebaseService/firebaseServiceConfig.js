const prodConfig = {
    apiKey: "AIzaSyDuFrujkb9re5-oCrGHJX8PXuS2FL-Wzho",
  authDomain: "eopsin-7cdfb.firebaseapp.com",
  databaseURL: "https://eopsin-7cdfb.firebaseio.com",
  projectId: "eopsin-7cdfb",
  storageBucket: "eopsin-7cdfb.appspot.com",
  messagingSenderId: "687267295138"
};

const devConfig = {
    apiKey: "AIzaSyDuFrujkb9re5-oCrGHJX8PXuS2FL-Wzho",
  authDomain: "eopsin-7cdfb.firebaseapp.com",
  databaseURL: "https://eopsin-7cdfb.firebaseio.com",
  projectId: "eopsin-7cdfb",
  storageBucket: "eopsin-7cdfb.appspot.com",
  messagingSenderId: "687267295138"
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;

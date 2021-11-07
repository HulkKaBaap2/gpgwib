
// var firebaseConfig = {
//     apiKey: "AIzaSyCern1CwkWTS-OrtWJgDDTZadrdYdtaJr4",
//     authDomain: "project-4578399300133411310.firebaseapp.com",
//     databaseURL: "https://project-4578399300133411310-default-rtdb.asia-southeast1.firebasedatabase.app",
//     projectId: "project-4578399300133411310",
//     storageBucket: "project-4578399300133411310.appspot.com",
//     messagingSenderId: "637367070472",
//     appId: "1:637367070472:web:5c46d217a2e13aa9b706bd",
//     measurementId: "G-8XC1X4G9QN"
//   };
  
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

var firebaseConfig = {
  apiKey: "AIzaSyBjoGlBnh1aNpv_zrSmjNheBFB1JynoDXI",
  authDomain: "kwitter-48ca2.firebaseapp.com",
  databaseURL: "https://kwitter-48ca2-default-rtdb.firebaseio.com",
  projectId: "kwitter-48ca2",
  storageBucket: "kwitter-48ca2.appspot.com",
  messagingSenderId: "920707602248",
  appId: "1:920707602248:web:95e199da234057a8d6c57d",
  measurementId: "G-CKW80LRKHD"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  function adduser(){
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
        purpose : "adding user name"
      });
      alert("user added")
  }
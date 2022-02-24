// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
    apiKey: "AIzaSyCQR7_B-8i6eRSJzdjq3cYsZ4o1xtLSc08",
    authDomain: "hackathon-9a101.firebaseapp.com",
    databaseURL: "https://hackathon-9a101-default-rtdb.firebaseio.com",
    projectId: "hackathon-9a101",
    storageBucket: "hackathon-9a101.appspot.com",
    messagingSenderId: "1053508331058",
    appId: "1:1053508331058:web:64170e91fc6778e97fbe2b",
    measurementId: "G-Q41JB5Z8HW"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('hackathon');
  
  // Listen for form submit
  document.getElementById('').addEventListener('submit', submitForm);
  var storageRef = firebase.storage().ref('photos/myPictureName');
  var fileUpload = document.getElementById("cameraInput");

  fileUpload.addEventListener('change', function(evt) {
      var firstFile = evt.target.files[0] ;// upload the first file only
      var uploadTask = storageRef.put(firstFile);
  })
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var subject =getInputVal('subject');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email,subject, message);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, subject, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      subject:subject,
      message:message
    });
  }
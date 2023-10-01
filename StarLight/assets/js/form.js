const firebaseConfig = {
    apiKey: "AIzaSyDhkA-Y_3HteoHlKvZDcohIvUFSSsy53Go",
    authDomain: "form-9e910.firebaseapp.com",
    databaseURL: "https://form-9e910-default-rtdb.firebaseio.com",
    projectId: "form-9e910",
    storageBucket: "form-9e910.appspot.com",
    messagingSenderId: "901923700394",
    appId: "1:901923700394:web:f56dee6f296906fc969ad3"
  };

  firebase.initializeApp(firebaseConfig);

  var formDB = firebase.database().ref('form')

  document.getElementById('form').addEventListener('submit', submitForm)

  function submitForm(e){
    e.preventDefault();

    var fname = getElementVal('fname');
    var lname = getElementVal('lname');
    var location = getElementVal('location');
    var dis = getElementVal('dis');
    var mail = getElementVal('mail');
    var phone = getElementVal('phone');
    var select = getElementVal('select');
    var issue = getElementVal('issue');

    saveMessages(fname, lname, location, dis, mail, phone, select, issue);

    alert("Your Complaint Is Submited Successfully!!")

    document.getElementById('form').reset();
  }

  const saveMessages = (fname, lname, location, dis, mail, phone, select, issue) => {
    var newform = formDB.push();

    newform.set({
        fname : fname,
        lname : lname,
        location : location,
        dis : dis,
        mail : mail,
        phone : phone,
        select : select,
        issue : issue,
    });
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
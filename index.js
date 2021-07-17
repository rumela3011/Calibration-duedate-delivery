  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB8lFtcS9flHYZ-wsJv7B6cvQPKsnAH0RY",
    authDomain: "database-7d07b.firebaseapp.com",
    projectId: "database-7d07b",
    storageBucket: "database-7d07b.appspot.com",
    messagingSenderId: "772824585378",
    appId: "1:772824585378:web:f3b465655089fb31cef3fb"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Form data
  var business_unit,plant,due_date,range,des_accuracy,equip_no,calib_freq,intim_days,section,place,equip_desc,last_calib,status,remarks,calib_stat;

  function form(){
      business_unit = document.getElementById('business_unit').value;
      plant = document.getElementById('plant').value;
      due_date = document.getElementById('due_date').value;
      range = document.getElementById('range').value;
      des_accuracy = document.getElementById('des_accuracy').value;
      equip_no = document.getElementById('equip_no').value;
      calib_freq = document.getElementById('calib_freq').value;
      intim_days = document.getElementById('intim_days').value;
      section = document.getElementById('section').value;
      place = document.getElementById('place').value;
      equip_desc = document.getElementById('equip_desc').value;
      last_calib = document.getElementById('last_calib').value;
      status = document.getElementById('status').value;
      remarks = document.getElementById('remarks').value;
      calib_stat = document.getElementById('calib_stat').value;
      
  }

  // Enter function
  document.getElementById('enter').onclick = function(){
      form();
      firebase.database().ref('Master-data/'+equip_no).set({
          business_unit: business_unit,
          plant: plant,
          due_date: due_date,
          range: range,
          des_accuracy: des_accuracy,
          equip_no: equip_no,
          calib_freq: calib_freq,
          intim_days: intim_days,
          section: section,
          place: place,
          equip_desc: equip_desc,
          last_calib: last_calib,
          status: status,
          remarks: remarks,
          calib_stat: calib_stat,
      });
      alert("Your data has been saved succesfully!");
    }

  // Select function
  document.getElementById('select').onclick = function(){
      form();
      firebase.database().ref('Master-data/'+equip_no).on('value',function(snapshot){
          document.getElementById('business_unit').value= snapshot.val().business_unit;
          document.getElementById('plant').value= snapshot.val().plant;
          document.getElementById('due_date').value= snapshot.val().due_date;
          document.getElementById('range').value= snapshot.val().range;
          document.getElementById('des_accuracy').value= snapshot.val().des_accuracy;
          document.getElementById('calib_freq').value= snapshot.val().calib_freq;
          document.getElementById('intim_days').value= snapshot.val().intim_days;
          document.getElementById('section').value= snapshot.val().section;
          document.getElementById('place').value= snapshot.val().place;
          document.getElementById('equip_desc').value= snapshot.val().equip_desc;
          document.getElementById('last_calib').value= snapshot.val().last_calib;
          document.getElementById('status').value= snapshot.val().status;
          document.getElementById('remarks').value= snapshot.val().remarks;
          document.getElementById('calib_stat').value= snapshot.val().calib_stat;
      });
  }

  // Update function
  document.getElementById('update').onclick = function(){
    form();
    firebase.database().ref('Master-data/'+equip_no).update({
        business_unit: business_unit,
        plant: plant,
        due_date: due_date,
        range: range,
        des_accuracy: des_accuracy,
        calib_freq: calib_freq,
        intim_days: intim_days,
        section: section,
        place: place,
        equip_desc: equip_desc,
        last_calib: last_calib,
        status: status,
        remarks: remarks,
        calib_stat: calib_stat,
    });
    alert("Your equipment data has been updated!");
}

// Delete function
document.getElementById('delete').onclick = function(){
    form();
    firebase.database().ref('Master-data/'+equip_no).remove();
    alert("Your equipment data has been deleted successfully!");
}

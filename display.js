// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB8lFtcS9flHYZ-wsJv7B6cvQPKsnAH0RY",
  authDomain: "database-7d07b.firebaseapp.com",
  projectId: "database-7d07b",
  storageBucket: "database-7d07b.appspot.com",
  messagingSenderId: "772824585378",
  appId: "1:772824585378:web:f3b465655089fb31cef3fb",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Get the data
function SelectAllData() {
  firebase
    .database()
    .ref("Master-data/")
    .once("value", function (AllRecords) {
      AllRecords.forEach(function (CurrentRecord) {
        var business_unit = CurrentRecord.val().business_unit;
        var plant = CurrentRecord.val().plant;
        var due_date = CurrentRecord.val().due_date;
        var range = CurrentRecord.val().range;
        var des_accuracy = CurrentRecord.val().des_accuracy;
        var equip_no = CurrentRecord.val().equip_no;
        var calib_freq = CurrentRecord.val().calib_freq;
        var intim_days = CurrentRecord.val().intim_days;
        var section = CurrentRecord.val().section;
        var place = CurrentRecord.val().place;
        var equip_desc = CurrentRecord.val().equip_desc;
        var last_calib = CurrentRecord.val().last_calib;
        var status = CurrentRecord.val().status;
        var remarks = CurrentRecord.val().remarks;
        var calib_stat = CurrentRecord.val().calib_stat;
        AddItemsToTable(
          business_unit,
          plant,
          due_date,
          range,
          des_accuracy,
          equip_no,
          calib_freq,
          intim_days,
          section,
          place,
          equip_desc,
          last_calib,
          status,
          remarks,
          calib_stat
        );
      });
    });
}

window.onload = SelectAllData;

//Filling the table
var serial_no = 0;
function AddItemsToTable(
  business_unit,
  plant,
  due_date,
  range,
  des_accuracy,
  equip_no,
  calib_freq,
  intim_days,
  section,
  place,
  equip_desc,
  last_calib,
  status,
  remarks,
  calib_stat
) {
  var tbody = document.getElementById("tbody1");
  var trow = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  var td5 = document.createElement("td");
  var td6 = document.createElement("td");
  var td7 = document.createElement("td");
  var td8 = document.createElement("td");
  var td9 = document.createElement("td");
  var td10 = document.createElement("td");
  var td11 = document.createElement("td");
  var td12 = document.createElement("td");
  var td13 = document.createElement("td");
  var td14 = document.createElement("td");
  var td15 = document.createElement("td");
  var td16 = document.createElement("td");

  td1.innerHTML = ++serial_no;

  td2.innerHTML = business_unit;
  td3.innerHTML = plant;
  td4.innerHTML = due_date;
  td5.innerHTML = range;
  td6.innerHTML = des_accuracy;
  td7.innerHTML = equip_no;
  td8.innerHTML = calib_freq;
  td9.innerHTML = intim_days;
  td10.innerHTML = section;
  td11.innerHTML = place;
  td12.innerHTML = equip_desc;
  td13.innerHTML = last_calib;
  td14.innerHTML = status;
  td15.innerHTML = remarks;
  td16.innerHTML = calib_stat;

  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  trow.appendChild(td5);
  trow.appendChild(td6);
  trow.appendChild(td7);
  trow.appendChild(td8);
  trow.appendChild(td9);
  trow.appendChild(td10);
  trow.appendChild(td11);
  trow.appendChild(td12);
  trow.appendChild(td13);
  trow.appendChild(td14);
  trow.appendChild(td15);
  trow.appendChild(td16);

  tbody.appendChild(trow);
}

const searchFun = () => {
  let filter_val = document.getElementById("myInput").value.toUpperCase();
  let myTable = document.getElementById("myTable");
  let tr = myTable.getElementsByTagName("tr");
  for (var i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      let textvalue = td.textContent || td.innerHTML;

      if (textvalue.toUpperCase().indexOf(filter_val) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};

//Pending checkbox controller

const searchPending = () => {
  let filter_val = document.getElementById("pendingcheck");
  let myTable = document.getElementById("myTable");
  let tr = myTable.getElementsByTagName("tr");

  if (filter_val.checked === true) {
    for (var i = 1; i < tr.length; i++) {
      // let td = tr[i].getElementsByTagName("td")[0];
      let column = myTable.rows[i].cells[15].innerHTML;

      if (column === "Pending") {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  } else {
    for (var i = 1; i < tr.length; i++) {
      let column = myTable.rows[i].cells[15].innerHTML;

      tr[i].style.display = "";
    }
  }
};

//Calibrated checkbox controller

const searchCalibrated = () => {
  let filter_val = document.getElementById("calibcheck");
  let myTable = document.getElementById("myTable");
  let tr = myTable.getElementsByTagName("tr");

  if (filter_val.checked === true) {
    for (var i = 1; i < tr.length; i++) {
      // let td = tr[i].getElementsByTagName("td")[0];
      let column = myTable.rows[i].cells[15].innerHTML;

      if (column === "Calibrated") {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  } else {
    for (var i = 1; i < tr.length; i++) {
      let column = myTable.rows[i].cells[15].innerHTML;

      tr[i].style.display = "";
    }
  }
};

$(document).ready(function(){
  $('.check').click(function() {
      $('.check').not(this).prop('checked', false);
  });
});

/* var loading = document.querySelector(".loading");
 window.addEventListener("load", vanish);

 function vanish(){
  loading.classList.add("disappear");
 }*/

//Reference to firebase
/*firebase.database().ref('Master-data');
  let data_arr = [];
  let data;

  const getData = (ref) => {
    return new Promise((resolve, reject) => {
      const onError = (error) => reject(error);
      const onData = (snap) => resolve(snap.val());
  
      ref.on("value", onData, onError);
    });
  };
  
  const displayData = () => {
    console.log(data);
  };
  
  window.addEventListener("DOMContentLoaded", () => {
    getData(contactInfo)
      .then((value) => {
        data = value;
        createTable(data);
        document.getElementById("loader").style.display = "none";
      })
      .catch((error) => {
        console.log(error);
      });
  });
  
  function createTable(data) {
    console.log(data);
    const obj_arr = [];
    for (const property in data) {
      obj_arr.push(data[property]);
      // console.log(`${property}: ${data[property].business_unit}`);
    }
  
    var display = document.getElementById("display");
    for (let i = 0; i < obj_arr.length; i++) {
      var newRow = display.insertRow(i + 1);
      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);
      var cell3 = newRow.insertCell(2);
      var cell4 = newRow.insertCell(3);
      var cell5 = newRow.insertCell(4);
      var cell6 = newRow.insertCell(5);
      var cell7 = newRow.insertCell(6);
      var cell8 = newRow.insertCell(7);
      var cell9 = newRow.insertCell(8);
      var cell10 = newRow.insertCell(9);
      var cell11 = newRow.insertCell(10);
      var cell12 = newRow.insertCell(11);
      var cell13 = newRow.insertCell(12);
      var cell14 = newRow.insertCell(13);
  
      cell1.innerHTML = obj_arr[i].business_unit;
      cell2.innerHTML = obj_arr[i].plant;
      cell3.innerHTML = obj_arr[i].due_date;
      cell4.innerHTML = obj_arr[i].range;
      cell5.innerHTML = obj_arr[i].des_accuracy;
      cell6.innerHTML = obj_arr[i].equip_no;
      cell7.innerHTML = obj_arr[i].calib_freq;
      cell8.innerHTML = obj_arr[i].intim_days;
      cell9.innerHTML = obj_arr[i].section;
      cell10.innerHTML = obj_arr[i].location;
      cell11.innerHTML = obj_arr[i].equip_desc;
      cell12.innerHTML = obj_arr[i].last_calib;
      cell13.innerHTML = obj_arr[i].status;
      cell14.innerHTML = obj_arr[i].remarks;
    }
  }*/

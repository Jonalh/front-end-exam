class Profile {
  setProfile(n, a, e, t) {
    this.name = n;
    this.age = a;
    this.email = e;
    this.telephoneNumber = t;

    this.saveProfile();
  }

  getProfile() {
    document.getElementById("FN").value = localStorage.getItem("name");
    document.getElementById("age").value = localStorage.getItem("age");
    document.getElementById("e").value = localStorage.getItem("email");
    document.getElementById("num").value = localStorage.getItem("number");
  }

  saveProfile() {
    let storeName = document.getElementById("FN").value;
    localStorage.setItem("name", storeName);
    let storeAge = document.getElementById("age").value;
    localStorage.setItem("age", storeAge);
    let storeEmail = document.getElementById("e").value;
    localStorage.setItem("email", storeEmail);
    let storeNum = document.getElementById("num").value;
    localStorage.setItem("number", storeNum);
    alert("Data saved in localStorage succussfully!!");
  }
}

function validateForm(e) {
  e = e || window.event;
  if (e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }

  var x = document.forms["Login"]["fName"].value;
  if (x == null || x == "") {
    alert("Please enter your name");
    document.getElementById("FN").focus();
    return false;
  }

  a = document.forms["Login"]["ageField"].value;
  if (a == null || a == "") {
    alert("age can not be empty");
    document.getElementById("age").focus();
    return false;
  }

  var em = document.forms["Login"]["email"].value;

  function confirmEnding(string, target) {
    return string;
  }

  if (em == null || em == "") {
    alert("Please enter your email");
    document.getElementById("e").focus();
    return false;
  }

  var numb = document.forms["Login"]["number"].value;
  if (numb == null || numb == "") {
    alert("Please enter your phone number");
    document.getElementById("num").focus();
    return false;
  }
  return true;
}

function UpdateProfile() {
  myProfile = new Profile();
  if (validateForm()) {
    myProfile.setProfile();
  }
  console.log(validateForm());
}

function displayProfile() {
  m = new Profile();
  console.log(m);
  m.getProfile();
}

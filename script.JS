function submitForm() {
  console.log("submitForm");
  var email = document.getElementById("emailInput").value;
  var password = document.getElementById("passwordInput").value;

  if (validateEmail(email)) {
    saveData(email, password);
  }
}

function validateEmail(email) {
  if (email == "") {
    document.getElementById("emailInput").style.border = "1px solid #c62447";
    alert("Por favor insira seu email!");
    return false;
  }

  return true;
}

function saveData(email, password) {
  document.getElementById("emailInput").style.border = "none";
  localStorage.setItem("emailInput", email);
  localStorage.setItem("passwordInput", password);

  alert("Work in progress");
}

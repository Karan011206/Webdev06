function saveData() {
  const website = document.getElementById("website").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (website === "" || email === "" || password === "") {
    alert("Please fill all fields");
    return;
  }

  const userData = {
    website,
    email,
    password,
  };

  localStorage.setItem("passwordManager", JSON.stringify(userData));

  displayData();

  alert("Data Saved Successfully");
}

function clearData() {
  localStorage.removeItem("passwordManager");

  document.getElementById("website").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";

  document.getElementById("output").innerHTML = "";

  alert("Data Cleared");
}

function displayData() {
  const savedData = JSON.parse(localStorage.getItem("passwordManager"));

  if (savedData) {
    document.getElementById("output").innerHTML = `
          <div class="card p-3 mt-2">
            <p><strong>Website:</strong> ${savedData.website}</p>
            <p><strong>Email:</strong> ${savedData.email}</p>
            <p><strong>Password:</strong> ${savedData.password}</p>
          </div>
        `;
  }
}

displayData();
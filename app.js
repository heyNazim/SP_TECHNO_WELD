let firstName = document.querySelector("#fName");
let lastName = document.querySelector("#lName");
let phone = document.querySelector("#phone");
let submit = document.querySelector("#submitBtn");
let firstNameValue;
let lastNameValue;
let phoneValue;
firstName.addEventListener("input", (e) => {
  console.log(e.target.value);
  firstNameValue = e.target.value;
});
lastName.addEventListener("input", (e) => {
  console.log(e.target.value);
  lastNameValue = e.target.value;
});
phone.addEventListener("input", (e) => {
  console.log(e.target.value);
  phoneValue = e.target.value;
});



const postData = async (
  url = "http://localhost:5000/userForm",
  data = {
    firstName: firstNameValue,
    lastName: lastNameValue,
    phone: phoneValue,
  }
) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

submit.addEventListener("click",()=> postData());

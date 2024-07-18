const localeStorageForm = document.getElementById("localestorageform");
const formFields = localeStorageForm.elements;
console.log(formFields);

const submitBtn = localeStorageForm.querySelector('[type="submit"]');
console.log(submitBtn);

submitBtn.addEventListener("click", clearStorage);

function clearStorage() {
  localStorage.clear();
}

function changeHandler() {
  if (this.type !== "checkbox") {
    console.log(this.name, this.value);
    localStorage.setItem(this.name, this.value);
  } else {
    localStorage.setItem(this.name, this.checked);
    console.log(this.name, this.checked);
  }
}

function checkStorage() {
  for (let i = 0; i < formFields.length; i++) {
    if (formFields[i].type !== "submit") {
      if (formFields[i].type === "checkbox") {
        // debugger;
        formFields[i].checked = localStorage.getItem(formFields[i].name);
        console.log(formFields[i].checked);
        console.log(localStorage.getItem(formFields[i].name));
      } else {
        formFields[i].value = localStorage.getItem(formFields[i].name);
      }
    }
  }

  attachEvents();
}

function attachEvents() {
  for (let i = 0; i < formFields.length; i++) {
    formFields[i].addEventListener("change", changeHandler);
  }
}

checkStorage();

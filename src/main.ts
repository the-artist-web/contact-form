const theName: any = document.querySelector("[data-name]");
const error_name: any = document.querySelector("[data-error-name]");
const lastName: any = document.querySelector("[data-last-name]");
const error_last_name: any = document.querySelector("[data-error-last-name]");
const emailAddress: any = document.querySelector("[data-email-address]");
const error_email_address_one: any = document.querySelector("[data-error-email-address-one]");
const error_email_address_two: any = document.querySelector("[data-error-email-address-two]");
const radioSelectedBox: any = document.querySelectorAll("[data-radio-selected-box]"); // for loop
const error_radio_selected: any = document.querySelector("[data-error-radio-selected]");
const radioSelectedItem: any = document.querySelectorAll("[data-radio-selected-item]"); // for loop
const iconRadioSelected: any = document.querySelectorAll("[data-icon-radio-selected]"); // for loop
const textarea: any = document.querySelector("[data-textarea]");
const error_textarea: any = document.querySelector("[data-error-textarea]");
const checkboxCheck: any = document.querySelector("[data-checkbox-check]");
const checkbox: any = document.querySelector("[data-checkbox]");
const prCheckbox: any = document.querySelector("[data-pr-checkbox]");
const error_checkbox_text: any = document.querySelector("[data-error-checkbox-text]");
const btnCheck: any = document.querySelector("[data-btn-check]");

const messageSend: any = document.querySelector("[data-message-send]");

btnCheck.addEventListener("click", () => {
    if (theName.value.toLowerCase() === "") {
        theName.classList.add("active");
        error_name.classList.add("active");
    } else {
        theName.classList.remove("active");
        error_name.classList.remove("active");
    };
    // lastName
    if (lastName.value.toLowerCase() === "") {
        lastName.classList.add("active");
        error_last_name.classList.add("active");
    } else {
        lastName.classList.remove("active");
        error_last_name.classList.remove("active");
    };

    // emailAddress
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailAddress.value.toLowerCase() === "") {
        emailAddress.classList.add("active");
        error_email_address_two.classList.add("active");
    } else if (emailAddress.value.toLowerCase() !== emailRegex) {
        emailAddress.classList.add("active");
        error_email_address_one.classList.add("active");
    } else {
        emailAddress.classList.remove("active");
        error_email_address_one.classList.remove("active");
        error_email_address_two.classList.remove("active");
    };

    // textarea
    if (textarea.value.toLowerCase() === "") {
        textarea.classList.add("active");
        error_textarea.classList.add("active");
    } else {
        textarea.classList.remove("active");
        error_textarea.classList.remove("active");
    };

    let anyChecked = false;

    for (let i = 0; i < radioSelectedItem.length; i++) {
        if (radioSelectedItem[i].checked) {
            anyChecked = true;
        };
    };
    
    if (!anyChecked) {
        error_radio_selected.classList.add("active");
    } else {
        error_radio_selected.classList.remove("active");
    };

    if (checkbox.checked) {
        anyChecked = true;
    };

    if (!anyChecked) {
        error_checkbox_text.classList.add("active");
    } else {
        error_checkbox_text.classList.remove("active");
    };

    if (textarea.value.toLowerCase() === "" 
    || lastName.value.toLowerCase() === "" 
    || emailAddress.value.toLowerCase() === "" 
    || !emailRegex.test(emailAddress.value.trim().toLowerCase()) 
    || textarea.value.toLowerCase() === "") {

    } else { 
        messageSend.classList.add("active");

        theName.value = "";
        textarea.value = "";
        lastName.value = "";
        emailAddress.value = "";
        textarea.value = "";

        theName.classList.remove("active");
        error_name.classList.remove("active");
        lastName.classList.remove("active");
        error_last_name.classList.remove("active");
        emailAddress.classList.remove("active");
        error_email_address_one.classList.remove("active");
        error_email_address_two.classList.remove("active");
        textarea.classList.remove("active");
        error_textarea.classList.remove("active");
        error_radio_selected.classList.remove("active");
        error_checkbox_text.classList.remove("active");

        setTimeout(() => {
            messageSend.classList.remove("active");
        }, 5000);
    };
});

theName.addEventListener("keyup", () => {
    if (theName.value.toLowerCase() === "") {
        theName.classList.add("active");
        error_name.classList.add("active");
    } else {
        theName.classList.remove("active");
        error_name.classList.remove("active");
    };
});

lastName.addEventListener("keyup", () => {
    if (lastName.value.toLowerCase() === "") {
        lastName.classList.add("active");
        error_last_name.classList.add("active");
    } else {
        lastName.classList.remove("active");
        error_last_name.classList.remove("active");
    };
});

emailAddress.addEventListener("keyup", () => {
    if (emailAddress.value.toLowerCase() === "") {
        emailAddress.classList.add("active");
        error_email_address_two.classList.add("active");
    } else {
        emailAddress.classList.remove("active");
        error_email_address_two.classList.remove("active");
    };
});

textarea.addEventListener("keyup", () => {
    if (textarea.value.toLowerCase() === "") {
        textarea.classList.add("active");
        error_textarea.classList.add("active");
    } else {
        textarea.classList.remove("active");
        error_textarea.classList.remove("active");
    };
});

for (let i = 0; i < radioSelectedBox.length; i++) {
    radioSelectedBox[i].addEventListener("click", () => {
        radioSelectedBox[i].classList.toggle("active");
        radioSelectedItem[i].classList.toggle("active");
        iconRadioSelected[i].classList.toggle("active");
    });
};

checkbox.addEventListener("click", () => {
    checkboxCheck.classList.toggle("active");
    checkbox.classList.toggle("active");
});

checkboxCheck.addEventListener("click", () => {
    checkboxCheck.classList.toggle("active");
    checkbox.classList.toggle("active");
});
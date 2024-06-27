var theName = document.querySelector("[data-name]");
var error_name = document.querySelector("[data-error-name]");
var lastName = document.querySelector("[data-last-name]");
var error_last_name = document.querySelector("[data-error-last-name]");
var emailAddress = document.querySelector("[data-email-address]");
var error_email_address_one = document.querySelector("[data-error-email-address-one]");
var error_email_address_two = document.querySelector("[data-error-email-address-two]");
var radioSelectedBox = document.querySelectorAll("[data-radio-selected-box]"); // for loop
var error_radio_selected = document.querySelector("[data-error-radio-selected]");
var radioSelectedItem = document.querySelectorAll("[data-radio-selected-item]"); // for loop
var iconRadioSelected = document.querySelectorAll("[data-icon-radio-selected]"); // for loop
var textarea = document.querySelector("[data-textarea]");
var error_textarea = document.querySelector("[data-error-textarea]");
var checkboxCheck = document.querySelector("[data-checkbox-check]");
var checkbox = document.querySelector("[data-checkbox]");
var prCheckbox = document.querySelector("[data-pr-checkbox]");
var error_checkbox_text = document.querySelector("[data-error-checkbox-text]");
var btnCheck = document.querySelector("[data-btn-check]");
var messageSend = document.querySelector("[data-message-send]");
btnCheck.addEventListener("click", function () {
    if (theName.value.toLowerCase() === "") {
        theName.classList.add("active");
        error_name.classList.add("active");
    }
    else {
        theName.classList.remove("active");
        error_name.classList.remove("active");
    }
    ;
    // lastName
    if (lastName.value.toLowerCase() === "") {
        lastName.classList.add("active");
        error_last_name.classList.add("active");
    }
    else {
        lastName.classList.remove("active");
        error_last_name.classList.remove("active");
    }
    ;
    // emailAddress
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailAddress.value.toLowerCase() === "") {
        emailAddress.classList.add("active");
        error_email_address_two.classList.add("active");
    }
    else if (emailAddress.value.toLowerCase() !== emailRegex) {
        emailAddress.classList.add("active");
        error_email_address_one.classList.add("active");
    }
    else {
        emailAddress.classList.remove("active");
        error_email_address_one.classList.remove("active");
        error_email_address_two.classList.remove("active");
    }
    ;
    // textarea
    if (textarea.value.toLowerCase() === "") {
        textarea.classList.add("active");
        error_textarea.classList.add("active");
    }
    else {
        textarea.classList.remove("active");
        error_textarea.classList.remove("active");
    }
    ;
    var anyChecked = false;
    for (var i = 0; i < radioSelectedItem.length; i++) {
        if (radioSelectedItem[i].checked) {
            anyChecked = true;
        }
        ;
    }
    ;
    if (!anyChecked) {
        error_radio_selected.classList.add("active");
    }
    else {
        error_radio_selected.classList.remove("active");
    }
    ;
    if (checkbox.checked) {
        anyChecked = true;
    }
    ;
    if (!anyChecked) {
        error_checkbox_text.classList.add("active");
    }
    else {
        error_checkbox_text.classList.remove("active");
    }
    ;
    if (textarea.value.toLowerCase() === ""
        || lastName.value.toLowerCase() === ""
        || emailAddress.value.toLowerCase() === ""
        || !emailRegex.test(emailAddress.value.trim().toLowerCase())
        || textarea.value.toLowerCase() === "") {
    }
    else {
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
        setTimeout(function () {
            messageSend.classList.remove("active");
        }, 5000);
    }
    ;
});
theName.addEventListener("keyup", function () {
    if (theName.value.toLowerCase() === "") {
        theName.classList.add("active");
        error_name.classList.add("active");
    }
    else {
        theName.classList.remove("active");
        error_name.classList.remove("active");
    }
    ;
});
lastName.addEventListener("keyup", function () {
    if (lastName.value.toLowerCase() === "") {
        lastName.classList.add("active");
        error_last_name.classList.add("active");
    }
    else {
        lastName.classList.remove("active");
        error_last_name.classList.remove("active");
    }
    ;
});
emailAddress.addEventListener("keyup", function () {
    if (emailAddress.value.toLowerCase() === "") {
        emailAddress.classList.add("active");
        error_email_address_two.classList.add("active");
    }
    else {
        emailAddress.classList.remove("active");
        error_email_address_two.classList.remove("active");
    }
    ;
});
textarea.addEventListener("keyup", function () {
    if (textarea.value.toLowerCase() === "") {
        textarea.classList.add("active");
        error_textarea.classList.add("active");
    }
    else {
        textarea.classList.remove("active");
        error_textarea.classList.remove("active");
    }
    ;
});
var _loop_1 = function (i) {
    radioSelectedBox[i].addEventListener("click", function () {
        radioSelectedBox[i].classList.toggle("active");
        radioSelectedItem[i].classList.toggle("active");
        iconRadioSelected[i].classList.toggle("active");
    });
};
for (var i = 0; i < radioSelectedBox.length; i++) {
    _loop_1(i);
}
;
checkbox.addEventListener("click", function () {
    checkboxCheck.classList.toggle("active");
    checkbox.classList.toggle("active");
});
checkboxCheck.addEventListener("click", function () {
    checkboxCheck.classList.toggle("active");
    checkbox.classList.toggle("active");
});

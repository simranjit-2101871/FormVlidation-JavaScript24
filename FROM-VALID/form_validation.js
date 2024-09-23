console.log("form validation project")
const tome = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

// console.log(tome, email, phone);

tome.addEventListener('blur', () => {
    console.log("name is blurred");
    //1.) validate name here

    let regex = /([0-9a-zA-Z]){0,10}/
    let str = tome.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('it matched');
        tome.classList.remove('is-invalid')
    }
    else {
        console.log('no match');
        tome.classList.add('is-invalid')// statement adds the CSS class is-invalid to the element referenced by the variable tome. This element is typically an HTML input field. Adding this class can be used to change the appearance of the element to visually indicate that the input is invalid, based on your CSS styling rules.
    }
});




email.addEventListener('blur', () => {
    console.log("email is blurred");
    //2.) validate mail here

    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("mail is valid");
        email.classList.remove('is-invalid');

    }
    else {
        console.log('you email is invalid');
        email.classList.add('is-invalid');
    }
});





phone.addEventListener('blur', () => {
    console.log("phone is blurred");
    //3.) validate phone number here


    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else{
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;
        
    }
});

/*const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    if (tome.classList.contains('is-invalid') || email.classList.contains('is-invalid') || phone.classList.contains('is-invalid')) {
        e.preventDefault();  // Prevent submission if validation fails
        alert("Form contains invalid fields!");
    }
});
*/

//submit he form
//code need to be completed



//qwuiz shdow the ibvlsi text of the form name woth red color
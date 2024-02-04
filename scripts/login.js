const wrapper = document.querySelector('.login-wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');


// When the register link is clicked
registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');   // Add the 'active' class to the wrapper to show registration content

});

// When the login link is clicked:
loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');  // Remove the 'active' class from the wrapper to hide registration content 

});
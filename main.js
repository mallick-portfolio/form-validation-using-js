// DOM Selection

const form = document.querySelector('form');
const email = form.querySelector('#email');
const password = form.querySelector('#password');
const submit = form.querySelector('#submit[type="submit"]');
const checkMe = form.querySelector('#check-me');
checkMe.addEventListener('change', (e) => {
  if (e.target.checked) {
    submit.removeAttribute('disabled');
  } else {
    submit.setAttribute('disabled', true);
  }
})

function validateForm() {
  let att = email.value.indexOf('.');
  if (email.value === '') {
    alert('This field not empty');
    return false;
  }
  if (!email.value.includes('@')) {
    alert('Please Provide Valid Email @');
    return false;
  }
  if (!email.value.includes('.')) {
    alert('plase email contains .');
    return false;
  }
  let emaillen = email.value.length - att
  if (emaillen < 4) {
    alert('Please Give email that contains . aedfk');
    return false;
  }
  if (password.value === '') {
    alert('Password must be provide');
    return false;
  }
  if (password.value.length < 8) {
    alert('password Length greater the 8');
  }
  let regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (!regularExpression.test(password.value)) {
    alert("password should contain atleast one number and one special character");
    return false;
  }
}
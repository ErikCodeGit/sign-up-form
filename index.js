const passwordInput = document.querySelector("#password")
const confirmPasswordInput = document.querySelector("#confirm-password")

passwordInput.addEventListener('input', checkPasswordsMatch)
confirmPasswordInput.addEventListener('input', checkPasswordsMatch)

function checkPasswordsMatch(e) {
  if (passwordInput.value == confirmPasswordInput.value) {
    passwordInput.classList.remove('error')
    confirmPasswordInput.classList.remove('error')
  } else {
    passwordInput.classList.add('error')
    confirmPasswordInput.classList.add('error')
  }
}

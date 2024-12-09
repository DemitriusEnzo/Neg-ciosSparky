const senha = 'sparky2024';

        document.getElementById('access-form').addEventListener('submit', function (e) {
            e.preventDefault();
            const password = document.getElementById('password').value;
            const errorMessage = document.getElementById('error-message');
            const successMessage = document.getElementById('success-message');

            if (password === senha) {
                errorMessage.style.display = 'none';
                successMessage.style.display = 'block';

                setTimeout(() => {
                    window.location.href = "niveldois.html";
                }, 2000);
            } else {
                errorMessage.style.display = 'block';
                successMessage.style.display = 'none';
            }
        });

        const togglePassword = document.querySelector('#togglePassword');
        const passwordInput = document.querySelector('#password');

        togglePassword.addEventListener('click', function () {

            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            const icon = togglePassword.querySelector('i');
            icon.classList.toggle('fa-eye-slash');
        });
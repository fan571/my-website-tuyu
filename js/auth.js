document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-container form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('登录成功！欢迎回来。');
        });
    }

    const registerForm = document.querySelector('.register-container form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm_password').value;
            if (password !== confirmPassword) {
                alert('密码不匹配，请重新输入。');
                return;
            }
            alert('注册成功！请登录。');
        });
    }
});
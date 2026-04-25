document.addEventListener('DOMContentLoaded', function() {
    const surveyForm = document.querySelector('.survey-form');
    if (surveyForm) {
        surveyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('感谢您的参与！问卷已提交。');
        });
    }

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

    const slides = document.querySelectorAll('.carousel .slide');
    if (slides.length) {
        let currentSlide = 0;
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        showSlide(currentSlide);
        setInterval(nextSlide, 3000);
    }
});
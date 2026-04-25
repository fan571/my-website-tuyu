document.addEventListener('DOMContentLoaded', function() {
    const surveyForm = document.querySelector('.survey-container form');
    if (surveyForm) {
        surveyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('感谢您的参与！问卷已提交。');
        });
    }
});
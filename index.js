const form = document.querySelector('.form-container');
const submitButton = document.querySelector('#submit-btn');
const userName = document.querySelector('#username');
const userPassword = document.querySelector('#password');
const validUser = [{
        username: 'Rhush-ABC123',
        password: 'abc123-rhush'
    },
    {
        username: 'Yan-KCF332',
        password: 'kcf332-yan'
    }
]

submitButton.addEventListener('click', () => {
    if(userName.value == validUser[0].username && userPassword.value == validUser[0].password || userName.value == validUser[1].username && userPassword.value == validUser[1].password) {
        alert('Login successful!');
        form.action = './Dashboard/dashboard.html';
    } else {
        alert('Invalid username or password.');
        form.action = 'index.html';
    }
});
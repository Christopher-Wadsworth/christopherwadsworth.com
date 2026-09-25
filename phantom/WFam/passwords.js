
const password = document.getElementById('password-input').value;
if (password === 'secretA') {
    window.location.href = '/page-a.html';
} else if (password === 'secretB') {
    window.location.href = '/page-b.html';
} else {
    alert('Wrong password');
}



function changeLanguage() {
    var languageSelector = document.getElementById("languageSelector");
    var selectedLanguage = languageSelector.value;
    var usernameLabel = document.querySelector('label[for="username"]');

    switch (selectedLanguage) {
        case 'hindi':
            usernameLabel.textContent = "कृपया अपना प्रबंधक लॉगिन और पासवर्ड दर्ज करें";
            break;
        case 'spanish':
            usernameLabel.textContent = "Por favor, ingrese su nombre de usuario y contraseña de administrador";
            break;
        case 'russian':
            usernameLabel.textContent = "Пожалуйста, введите ваш логин и пароль администратора";
            break;
        case 'italian':
            usernameLabel.textContent = "Inserisci il tuo login e la tua password da amministratore";
            break;
        case 'french':
            usernameLabel.textContent = "Veuillez entrer votre identifiant et votre mot de passe administrateur";
            break;
        case 'portuguese':
            usernameLabel.textContent = "Por favor, insira seu login e senha de administrador";
            break;
        case 'chinese':
            usernameLabel.textContent = "请输入您的管理员登录名和密码";
            break;
        case 'urdu':
            usernameLabel.textContent = "براہ کرم اپنا ایڈمنسٹریٹر لاگ ان اور پاسورڈ درج کریں۔";
            break;
        case 'polish':
            usernameLabel.textContent = "Proszę podać nazwę użytkownika i hasło administratora";
            break;
        case 'dutch':
            usernameLabel.textContent = "Voer uw beheerderslogin en wachtwoord in";
            break;
        case 'korean':
            usernameLabel.textContent = "관리자 로그인 및 암호를 입력하십시오";
            break;
        case 'japanese':
            usernameLabel.textContent = "管理者のログインとパスワードを入力してください";
            break;
        default:
            usernameLabel.textContent = "Please enter your administrator login and password";
    }
}

function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Basic validation: Check if both fields are filled
    if (username === "" && password === "") {
        alert("Both username and password are required.");
    } else if (username === "") {
        alert("Please fill in the username.");
    } else if (password === "") {
        alert("Please fill in the password.");
    } else {
        alert("Login successful!");
    }
}

// Loader for 1 second
setTimeout(function () {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}, 1000);
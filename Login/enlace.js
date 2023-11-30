<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página de Inicio de Sesión</title>
    <style>
         body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        .login-container {
            background-color: #fff;
            border: 1px solid #ddd;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 300px;
            text-align: center;
        }

        .login-container h2 {
            color: #333;
        }

        .login-form {
            display: flex;
            flex-direction: column;
            margin-top: 20px;
        }

        .login-form label {
            margin-bottom: 8px;
            font-weight: bold;
        }

        .login-form input {
            padding: 8px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 3px;
        }

        .login-form button {
            padding: 10px;
            background-color: #4caf50;
            color: #fff;
            border: none;
            border-radius: 3px;
            cursor: pointer;
        }

        .login-form button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <h2>Iniciar Sesión</h2>
        <form class="login-form" onsubmit="return validateForm()">
            <label for="username">Usuario:</label>
            <input type="text" id="username" name="username" required>

            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required>

            <button type="submit">Ingresar</button>
        </form>
    </div>

    <script>
        function validateForm() {
            // Obtener valores del formulario
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;

            // Validar credenciales (puedes comparar con credenciales reales en el servidor)
            if (username === 'us' && password === 'con') {
                // Credenciales correctas, redirigir a la otra página
                window.location.href = 'file:///C:/Users/Admin/Desktop/xprime%209-3/pruebas/Index1.html'; // Reemplaza 'otra_pagina.html' con tu URL real
                return false; // Evitar el envío del formulario
            } else {
                // Credenciales incorrectas, puedes mostrar un mensaje de error aquí
                alert('Credenciales incorrectas');
                return false; // Evitar el envío del formulario
            }
        }
    </script>
</body>
</html>
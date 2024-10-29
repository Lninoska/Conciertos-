
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('tab-vip').addEventListener('click', function () {
        document.getElementById('form-regular').style.display = 'none';
        document.getElementById('form-vip').style.display = "block";
    });

    document.getElementById('tab-signup').addEventListener('click', function (){
        document.getElementById('form-regular').style.display = 'block';
        document.getElementById('form-vip').style.display = "none";
    });

    document.getElementById('form-1').addEventListener('submit', function(event){
        event.preventDefault();

        const email = document.getElementById('correo1').value;
        const password = document.getElementById('password').value;
        const usuario = `Usuario${Math.floor(Math.random()*500)}`;

        document.getElementById('modal-title').textContent = usuario;
        document.getElementById('modal-body').textContent = `Correo: ${email} Password: ${password}`;

        const modal = new bootstrap.Modal(document.getElementById('signupModal'));
        modal.show();
    });
    document.getElementById('form-2').addEventListener('submit', function(event){
        event.preventDefault();

        const usuario = document.getElementById('nombre').value;
        const email = document.getElementById('correo2').value;
        const password = document.getElementById('contrasena').value;

        document.getElementById('modal-title').textContent = `Bienvenido ${usuario}`
        document.getElementById('modal-body').textContent = `Usuario: ${usuario}  Correo: ${email} Password: ${password}`;

        const modal = new bootstrap.Modal(document.getElementById('signupModal'));
        modal.show();
    });


})
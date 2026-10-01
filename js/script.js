function hacerPedido(producto, precio) {
    // 1. Obtenemos los valores que el estudiante seleccionó
    const grado = document.getElementById('grado').value;
    const seccion = document.getElementById('seccion').value;
    
    // 🔴 CAMBIA ESTE NÚMERO POR EL TUYO 🔴
    const numeroWhatsApp = "50363002871"; 

    // 2. Validación: Verificamos si los campos están vacíos
    if (grado === "" || seccion === "") {
        // Si falta algo, mostramos una alerta y detenemos la función
        alert("⚠️ ¡Alto ahí! Por favor, selecciona tu grado y sección antes de pedir.");
        
        // Enfoca la pantalla de vuelta a los datos
        document.getElementById('grado').focus();
        return; 
    }

    // 3. Si todo está correcto, armamos el mensaje
    const mensaje = `Hola, soy estudiante de ${grado}, Sección "${seccion}". Me gustaría pedir un ${producto} por $${precio}.`;
    
    // 4. Creamos el link de WhatsApp y lo abrimos
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    
    window.open(url, '_blank');
}
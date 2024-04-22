function calcularCalificacion() {
    const classroomInput = document.getElementById('classroom');
    const classroom = parseFloat(classroomInput.value);
    const calificacionExamenInput = document.getElementById('calificacionExamen');
    const calificacionExamenValue = calificacionExamenInput.value;

    if (isNaN(classroom) || classroom < 1 || classroom > 100) {
        document.getElementById('resultado').innerHTML = '<p class="error"><i class="fas fa-exclamation-triangle"></i> Por favor ingrese un número válido para Classroom entre 1 y 100.</p>';
        return;
    }

    let calificacionExamen;
    if (calificacionExamenValue.trim() === '') {
        calificacionExamen = 0;
    } else {
        calificacionExamen = parseFloat(calificacionExamenValue);
        if (isNaN(calificacionExamen) || calificacionExamen < 1 || calificacionExamen > 100) {
            document.getElementById('resultado').innerHTML = '<p class="error"><i class="fas fa-exclamation-triangle"></i> La calificación del examen debe ser un número válido entre 1 y 100.</p>';
            return;
        }
    }

    const resultado = (classroom * 0.7) + (calificacionExamen * 0.3);
    if (resultado < 59.99) {
        document.getElementById('resultado').innerHTML = `<p class="danger"><i class="fas fa-exclamation-circle"></i> El resultado es: ${resultado}</p>`;
    } else {
        document.getElementById('resultado').innerHTML = `<p class="success"><i class="fas fa-check-circle"></i> El resultado es: ${resultado}</p>`;
    }
}

function resetForm() {
    document.getElementById('calificacionForm').reset();
    document.getElementById('resultado').innerHTML = '';
}

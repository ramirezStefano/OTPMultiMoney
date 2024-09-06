# OTPMultiMoney

# Enunciado para Prueba Técnica de Front-End Developer (Junior/Mid)

## Descripción del Proyecto

Debes desarrollar un formulario de verificación por código OTP (One-Time Password) utilizando React 17 y TypeScript. El formulario debe cumplir con los siguientes requisitos funcionales y de usabilidad. Tendrás un máximo de 24 horas para completar la tarea.

## Requisitos Funcionales

1. **Formulario de OTP:**

    - El formulario debe contener 4 campos de entrada, cada uno para un dígito del código OTP.
    - El OTP debe aceptar únicamente dígitos numéricos.

2. **Interacción con el Teclado:**

    - **Entrada:** Los usuarios deben poder ingresar dígitos directamente en los campos.
    - **Pegado:** Los usuarios deben poder pegar un código completo (4 dígitos) en cualquier campo, distribuyéndose automáticamente en los campos correspondientes.
    - **Navegación:** Los usuarios deben poder moverse entre los campos utilizando las flechas del teclado (izquierda/derecha).
    - **Borrado:** Al presionar la tecla de borrar (Backspace) en un campo vacío, el cursor debe retroceder al campo anterior y eliminar el contenido si lo hay.

3. **Validación y Estado del Botón de Envío:**

    - **Validación:** El formulario debe validar que los 4 dígitos ingresados coincidan con un código predefinido (que se recibirá como parámetro GET en la URL).
    - **Habilitar Botón:** Una vez que el código ingresado coincida con el código recibido por URL, el botón de envío debe habilitarse y cambiar su color a verde.
    - **Deshabilitar Botón:** Si el código no es correcto o no está completo, el botón debe permanecer deshabilitado.

4. **Estilo y Diseño:**
    - No es necesario un diseño complejo, pero el formulario debe ser claro y fácil de usar.
    - Usa estilos básicos de CSS o TailwindCSS (opcional) para la presentación.

## Entrega

-   **Repositorio en GitHub:** Debes subir tu código a un repositorio público en GitHub.
-   **URL del Repositorio:** Comparte el enlace del repositorio con nosotros al finalizar la tarea.

## Criterios de Evaluación

1. **Funcionalidad:** Se evaluará que el formulario funcione según las especificaciones dadas.
2. **Calidad del Código:** Limpieza y organización del código, uso correcto de React y TypeScript.
3. **Interacción del Usuario:** Se valorará la fluidez y naturalidad de la interacción con el teclado.
4. **Gestión de Estados:** Uso eficiente de estados en React para manejar las entradas y la validación.
5. **Pruebas (Opcional):** Si incluyes pruebas unitarias o de integración, será un plus.

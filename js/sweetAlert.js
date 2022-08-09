(async() =>{
    const { value: nombre } = await Swal.fire({
        icon: "question",
        confirmButtonText: "Ingresar",
        title: "Hola, ¿Como te llamas?",
        input:"text",
        inputPlaceholder: "Nombre",
        inputValue:"",
        footer: "Información inportante",
        padding: "1rem", 
        backdrop:true,
        position: "top",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: true,
        stopKeydownPropagation: false,
    });
    
    document.getElementById('name').innerHTML = `Hola ${nombre}` ;
})();













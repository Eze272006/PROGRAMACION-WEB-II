const btn = document.querySelector('[data-form-btn]');

console.log(btn);

const createTask=(evento)=>{    
    evento.preventDefault();
    const input =document.querySelector('[data-form-input]')
    //funcion para recuperar el texto de mi input
    console.log(input.value);
}

btn.addEventListener('click',createTask);
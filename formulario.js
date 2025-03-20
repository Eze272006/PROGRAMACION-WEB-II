const Form = () => {
//const form = document.createElement('form');
const form =document.querySelector('data-form');
const inputTask =document.querySelector('data-form');
const inputDescription =document.querySelector('data-input-description');
const date =document.querySelector('data-input-fecha');
const inputPrioridad=document.querySelector('data-input-prioridad');

const datosForm=()=>{
    return{
        task: inputTask.value.trim(),
        description: inputDescription.value.trim(),
        date: date.value.trim(),
        prioridad: inputPrioridad.value.trim()
    }
}
const reset=()=>{
    inputTask.value='';
    inputDescription.value='';
    date.value='';
    inputPrioridad.value='';
};
//Esto devuelve los datos para usarlos en la tabla
const setDatos={callback}=>{
    form.addEventListener('submit',(evento)=>{
        evento.preventDefault();
        callback(datosForm());
        reset();
    });
};
return {setDatos};
};
export default Form;

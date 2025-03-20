import tabla from './tabla,js';
const cards = () => {
    const taskCards=document.getElementById('taskCards');
    const update = () => {
        const task = tabla.getTask();
        taskCards.innerHTML=''; //limpia el contenido

        //crear cards por tarea
        task.forEach(task =>{
            const card = document.createElement('div');
            card.className='taskCard';
            card.innerHTML=`
            <p><strong>Nombre:</strong>${task.task}</p>
            <p><strong>Descripcion:</strong>${task.description}</p>
            <p><strong>Fecha:</strong>${task.date}</p>
            <p><strong>Prioridad:</strong>${task.prioridad}</p>
            <p><strong>Estado:</strong>${task.completed?'Completada':'Pendiente'}</p>

            `;
            taskCards.appendChild(card);
        }
        );
    }
    return {update};
}
export default cards;


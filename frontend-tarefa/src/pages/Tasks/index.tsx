import * as React from "react";
import { Table, Button } from 'react-bootstrap';
import { api } from "../../services/api";
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import "./index.css";

interface ITask {
    id: number;
    title: string;
    description: string;
    finished: boolean;
    created_at: Date;
    updated_at: Date;
}

function Tasks() {

    const [tasks, setTasks] = React.useState<ITask[]>([])
    const history = useHistory()

    React.useEffect(() => {
        loadTasks()
    }, [])

    async function loadTasks() {
        const response = await api.get('/tasks')
        setTasks(response.data)
    }

    function formatDate(date: Date) {
        return moment(date).format('DD/MM/YYYY')
    }

    function newTask() {
        history.push('/NewTask')
    }

    function editTask(id: number) {
        history.push(`/NewTask/${id}`)
    }

    return (
        <div className="container">
            <br />
            <div className="task-header">
                <h1>Tarefas</h1>
                <Button variant="dark" size="sm" onClick={newTask}>Nova Tarefa</Button>
            </div>
            <br />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Descrição</th>
                        <th>Data de Atualização</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(task => (
                            <tr key={task.id}>
                                <td>{task.id}</td>
                                <td>{task.title}</td>
                                <td>{formatDate(task.updated_at)}</td>
                                <td>{task.finished ? "Finalizado" : "Pendente"}</td>
                                <td>
                                    <Button size="sm" variant="primary" onClick={() => editTask(task.id)}>Editar</Button>{' '}
                                    <Button size="sm" variant="success">Finalizar</Button>{' '}
                                    <Button size="sm" variant="warning">Visualizar</Button>{' '}
                                    <Button size="sm" variant="danger">Remover</Button>{' '}
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </div>
    );
}


export default Tasks;
import styles from '../../styles/Home.module.css'
import Header from '../../components/Header'
import QuestionBox from '../../components/QuestionsBox'
import {Card, CardContent} from '@mui/material'

export default function createExam(){
    return(
        <div>
            <Header title='Create exam'/>
            <main className={styles.main}>
                <form>
                    <div class='mb-3'>
                        <label for='formularyName' class='form-label'>Nombre del formulario</label>
                        <input type='text' class="form-control" id='formularyName'/>
                    </div>
                    <div class='mb-3'>
                        <label for='accessCode' class='form-label'>Código de acceso</label>
                        <input type='password' class='form-control' id='accessCode'/>
                    </div>
                    <div class='mb-3'>
                        <label for='description' class='form-label'>Descripción</label>
                        <input type='desc' class='form-control' id='descrip'/>
                    </div>
                    <div class='text-center'>
                        {QuestionBox}
                        <Card>
                        <CardContent>
                            <div class='mb-3'>
                                <label for='Question1' class='form-label'>Pregunta 1</label>
                                <input type='textquest' class="form-control" id='question1'/>
                            </div>
                            <div class='mb-3'>
                                <label for='Respuesta1' class='form-label'>Respuestas:</label>
                                <input type='textresp1' class="form-control" id='response1'/>
                            </div>
                            <div class='text-center'>
                                <button type='btn' class='btn btn-primary'>
                                    Crear pregunta
                                </button>
                            </div>
                        </CardContent>
                    </Card>
                    </div>
                </form>
            </main>
        </div>
    )
}
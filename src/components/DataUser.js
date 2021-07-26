import React, { useState, useEffect } from 'react'
import FormUser from './FormUser'
import fireDb from '../database/firebase'

const DataUser = () => {

    let [datesUser, setDatesUser] = useState({})

    let [idAtual, setIdAtual] = useState('')

    useEffect(() => {
        fireDb.child('usuarios').on('value', dbPhoto => {
            if (dbPhoto.val() != null) {
                setDatesUser({
                    ...dbPhoto.val()
                })
            }
        }

        )


    }, []//parar renderização 
    )

    const addEdit = obj => {

        if(idAtual===''){

            console.log(obj)
        fireDb.child('usuarios').push(
            obj,
            error => {
                if (error) {
                    console.log(error)
                }else {
                    setIdAtual('')
                }
            }
        )


        }else {
            fireDb.child(`usuarios/${idAtual}`).set(

                obj,
                err => {
                    if(err){
                        console.log(err)
                    }
                }
            )


        }
        

    }
    const deleteUsuario = key => {
        if(window.confirm('Deseja realmente excluir esse usuário?')){
            fireDb.child(`usuarios/${key}`).remove(
                err => {
                    if(err){
                        console.log(err)
                    }
                }
            )
        }
    }
    return (
        <div className="container -fluid py-4">
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-12">
                    <h1 className="display-5 fw-bold">Cadastro de Usuários</h1>
                    <p className="col-md-8 fs-4">Crud cria criado para teste de desenvolvedor utilizando no backend ReactJS(hooks), banco de dados Firebase e frontend bootstrap</p>
                    <p><h5>Desenvolvido por Gabriel Braz</h5></p>

                </div>
            </div>


            <div className="col-md-12">
                <div className="h-100 p-5 bg-light border rounded-3">
                    <div>
                        <FormUser {...({addEdit, idAtual, datesUser})} />
                    </div>

                </div>
            </div>

            <div className="col-md-12 ">
                <div className="h-100 p-5 bg-light border rounded-3">
                    <table className="table table-striped table-light">
                        <thead className="thead-light">
                            <th scope="col">Nome Completo</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Nascimento</th>
                            <th scope="col">Ações</th>
                        </thead>


                        <tbody>{
                            Object.keys(datesUser).map(id => {
                                return <tr key={id}>

                                    <td>{datesUser[id].nameFull}</td>
                                    <td>{datesUser[id].tel}</td>
                                    <td>{datesUser[id].birthday}</td>
                                    <td>
                                        <a className="btn btn-primary" onClick = { () => {setIdAtual(id)}}>
                                            <i className="fas fa-pencil-alt"></i>
                                        </a>
                                        <a className="btn btn-danger" onClick = { () => {deleteUsuario(id)}}>
                                            <i className="fas fa-trash-alt"></i>
                                        </a>
                                        
                                    </td>
                                </tr>
                            })


                        }



                        </tbody>


                    </table>

                </div>
            </div>
        </div>



    )





}

export default DataUser
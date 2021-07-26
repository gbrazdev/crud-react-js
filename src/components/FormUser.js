import React, { useEffect, useState } from 'react'

const FormUser = (props) => {



    //variaveis de captura de dados
    const dataInit = {
        nameFull: '',
        tel: '',
        birthday: ''

    }
    //hooks
    let [values, setValues] = useState(dataInit)

    useEffect(() => {

        if (props.idAtual === '') {
            setValues({
                ...dataInit
            })
        } else {
            setValues({
                ...props.datesUser[props.idAtual]
            })
        }
    }, [props.idAtual, props.datesUser]


    )

    //manipulador
    const inputChange = e => {
        let { name, value } = e.target

        setValues({
            ...values,
            [name]: value
        })
    }
    const inputSend = e => {

        e.preventDefault()
        props.addEdit(values)


    }


    return (
        <div>
            <form autoComplete="off" onSubmit={inputSend}>
                <div className="row">
                    <div class="col-md-6 p-1 ">
                        <div className="form-group input-group">
                            <div className="form-group input-group-prepend">

                                <span className="input-group-text">Foto de Perfil</span>
                            </div>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="inputGroupFile01" />

                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 p-1">
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="fas fa-user"></i>
                                </div>
                            </div>
                            <input className="form-control " placeholder="Nome Completo" name="nameFull" value={values.nameFull} onChange={inputChange} />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div class="col-md-6 p-1">
                        <div className="form-group input-group ">
                            <div className="input-group-prepend ">
                                <div className="input-group-text ">
                                    <i className="fas fa-phone"></i>
                                </div>
                            </div>
                            <input type="tel" className="form-control " placeholder="Telefone"  name="tel" value={values.tel} onChange={inputChange} />
                            

                        </div>
                    </div>



                    <div class="col-md-6 p-1">
                        <div className="form-group input-group ">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="fas fa-calendar"></i>
                                </div>
                            </div>
                            <input type="date" className="form-control " placeholder="Data de Nascimento" name="birthday" value={values.birthday} onChange={inputChange} />
                        </div>
                    </div>


                </div>


                <hr />

                <div className="form-group">
                    <input type="submit" value={props.idAtual === '' ? 'Salvar' : 'Editar'} className="btn btn-secondary btn-block" />
                </div>






            </form>
        </div>

    )

}

export default FormUser
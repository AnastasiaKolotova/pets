import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const Searching = () => {
    let history=useNavigate()

    let [district, setDistrict]=useState('Приморский')
    let [kind, setKind]=useState()

    localStorage.kind=kind

    function locate(e) {
        e.preventDefault()
        history(`/pets/${district}`)
    }

    return (
        <div className={'width100'}>
            <section id="find">
                <form method="GET" encType="multipart/form-data" onSubmit={locate}
                      className="w-50 m-auto p-3" style={{"minWidth": "300px"}}>
                    <div className="mb-3">
                        <label htmlFor="district" className="form-label">Выберите район:</label>
                        <select className="form-select" name='type' id="district"
                                onChange={(e)=>setDistrict(e.district)}>
                            <option>Приморский</option>
                            <option>Петроградский</option>
                            <option>Василиостровский</option>
                            <option>Центральный</option>
                            <option>Красногвардейский</option>
                            <option>Выборгский</option>
                            <option>Калининский</option>
                            <option>Невский</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="kind" className="form-label">Введите вид животного:</label>
                        <input type="text" className="form-control" id="kind"
                               onChange={(e)=>setKind(e.Kind)}/>
                    </div>

                    <div className="row_align">
                        <input type="submit" value="Поиск" className="test-0-fbs butt row_item"/>
                    </div>

                </form>
            </section>
        </div>
    );
};

export default Searching;
import React, {useEffect, useId, useState} from 'react';
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import request from "../actions/request";


const Registration = () => {
    let [user, setUser]=useState({'name':'', 'phone':'', 'email':'',
        'password':'', 'confirm':''})
    let history=useNavigate()
    console.log(user)

    function send(e){
        e.preventDefault()
        registr_req(user)

        async function registr_req(user) {
            let body = JSON.stringify(user)
            let url = 'http://pets.сделай.site/api/register'
            let response = await request(url, body, 'POST')
            let result = await response
            if (result.status !== 204) return

            let user_data = {email: user.email, password: user.password}
            global.user = user_data

            body = JSON.stringify(user_data)
            url = 'http://pets.сделай.site/api/login'
            response = await Request(url, body, 'POST')

            if(response.status===200) document.getElementById('message').style.display='block'
            if(response.status !== 200) document.getElementById('error').style.display='block'

            let token = await response.data.token
            localStorage.token = token
        }
       history('/profile')
    }

    return (
            <div>
                <form className="w-50 m-auto" style={{minWidth:"500px"}} method='POST' onSubmit={send}>
                    <fieldset className="color_white">

                        <label htmlFor="validationDefault01" className="form-label titles_card">Имя:</label>
                        <input type="text" className="form-control" id="namee" required
                                   onChange={(e)=>setUser({...user, name:e.target.value})}/>
                        <div id="emailHelp1" className="form-text">Используйте кириллические буквы</div>

                        <label htmlFor="validationDefault02" className="form-label titles_card">Телефон:</label>
                        <input type="text" className="form-control" id="phonee" required
                                   onChange={(e)=>setUser({...user, phone:e.target.value})}/>
                        <div className="form-text">Используйте цифры, +, -.</div>

                        <label htmlFor="validationDefaultUsername" className="form-label titles_card">Email:</label>
                        <div className="input-group">
                             <span className="input-group-text" id="inputGroupPrepend2">@</span>
                             <input type="text" className="form-control" id="emaill"
                                       aria-describedby="inputGroupPrepend2" required onChange={(e)=>setUser({...user, email:e.target.value})}/>
                             <div className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.</div>
                        </div>

                        <label htmlFor="validationDefault03" className="form-label titles_card">Пароль:</label>
                        <input type="password" className="form-control" id="passwordd" required
                                   onChange={(e)=>setUser({...user, password:e.target.value})}/>
                        <div className="form-text">Не менее 7 символов, обязательно: 1 - цифра, 1 - строчная буква,
                                1 - заглавная буква
                        </div>

                        <label htmlFor="validationDefault03" className="form-label titles_card">Повторите пароль:</label>
                        <input type="password" className="form-control" id="password_confirmation" required
                                   />

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox"  id="confirm" required
                                       onChange={(e)=>setUser({...user, confirm:e.target.value})}/>
                            <label className="form-check-label" htmlFor="invalidCheck2">
                                    Согласие с обработкой данных
                            </label>
                       </div>

                        <div className="row_align">
                            <button className="button" type="submit">Зарегистрироваться</button>
                            <input type="reset" className="butt" value="Сбросить"/>
                        </div>

                        <div id={'message'} style={{display:'none'}} className="text-center">
                            <label htmlFor="name" className="text-success w-25">Вы успешно зарегистрировались!</label>
                        </div>

                        <div id={'error'} style={{display:'none'}} className="text-center">
                            <label htmlFor="name" className="text-success w-25">Регистрация не удалась. Попробуйте снова.</label>
                        </div>
                    </fieldset>
                </form>
            </div>
    );
};

export default Registration;






/*import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import request from "../actions/request";


const Registration = () => {
    let [user, setUser]=useState({'first_name':'', 'last_name':'', 'phone':'', 'document_number':'', 'password':''})

    let history=useNavigate()

    async function registr_req(user) {
        let body=JSON.stringify(user)
        let url='http://pets.сделай.site/api/register'
        let response=await request(url, body, 'POST')
        let result=await response
        if (result.status!==204) return
        let user_data={phone:user.phone, password:user.password}
        global.user=user_data

        body=JSON.stringify(user_data)
        url='http://pets.сделай.site/api/login'
        response=await  request(url, body, 'POST')
        let token=await response.data.token
        localStorage.token=token

        history('/profile')

    }

    return (
        <div>
            <section>

                <form action="" method="GET" className="w-50 m-auto p-3" style={{"minWidth":"300px"}}>

                    <fieldset className="row_align color_white">

                        <label htmlFor="name" className="form-label">Имя:</label>
                        <input type="text" className="form-control" name="name"
                               id="name" onChange={(e)=>setUser({...user, first_name:e.target.value})}/>

                        <label htmlFor="phone" className="form-label">Телефон:</label>
                        <input type="tel" className="form-control" name="phone"
                               id="phone" onChange={(e)=>setUser({...user, phone:e.target.value})}/>

                        <label htmlFor="email" className="form-label">E-mail:</label>
                        <input type="email" className="form-control" name="email"
                               id="email" onChange={(e)=>setUser({...user, first_name:e.target.value})}/>

                        <label htmlFor="pass" className="form-label">Пароль:</label>
                        <input type="password" className="form-control" name="pass"
                               id="pass" onChange={(e)=>setUser({...user, password:e.target.value})}/>

                        <label htmlFor="pass" className="form-label">Повторите пароль:</label>
                        <input type="password" className="form-control" name="pass"
                               id="pass" onChange={(e)=>setUser({...user, password:e.target.value})}/>

                    </fieldset>

                    <div className="row_align">
                        <input type="button" className="test-2-btn button" value="Зарегистрироваться" onClick={()=>registr_req(user)}/>
                        <input type="reset" className="button" value="Сбросить"/>
                    </div>

                </form>

            </section>
        </div>
    );
};

export default Registration;

/*
<form className="w-50 m-auto p-3" style={{"minWidth":"300px"}}>
    <div className="mb-3">
        <label htmlFor="name" className="form-label">Введите имя:</label>
        <input type="text" className="form-control" id="name"/>
        <div id="emailHelp1" className="form-text">Используйте кириллические буквы</div>
    </div>

    <div className="mb-3">
        <label htmlFor="phone" className="form-label">Введите свой телефон:</label>
        <input type="tel" className="form-control" id="phone"/>
        <div className="form-text">Используйте цифры, +, -.</div>
    </div>

    <div className="mb-3">
        <label htmlFor="email" className="form-label">Введите адрес электронной почты</label>
        <input type="email" className="form-control" id="email"/>
        <div className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.</div>
    </div>

    <div className="mb-3">
        <label htmlFor="password" className="form-label">Введите пароль:</label>
        <input type="password" className="form-control" id="password"/>
        <div className="form-text">Не менее 7 символов, обязательно: 1 - цифра, 1 - строчная
            буква, 1 - заглавная буква
        </div>
    </div>

    <div className="mb-3">
        <label htmlFor="confirm_password" className="form-label">Повторите пароль:</label>
        <input type="password" className="form-control" id="confirm_password"/>
        <div className="form-text"/>
    </div>

    <div className="mb-3 form-check p-3">
        <input type="checkbox" className="form-check-input" id="check"/>
        <label className="form-check-label" htmlFor="check">Согласие на обработку персональных данных</label>
    </div>

    <input type="submit" className="btn button"/>
</form> */
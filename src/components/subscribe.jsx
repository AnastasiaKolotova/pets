import React, {useEffect, useId, useState} from 'react';

const Subscribe = () => {
    async function my_request(e) {
        e.preventDefault()
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(email)

        };

        console.log(requestOptions)

        let res = fetch("http://pets.сделай.site/api/subscription", requestOptions)
        let result = await res;

        if(result.status===204) document.getElementById('message').style.display='block'
        if(result.status !== 204) document.getElementById('error').style.display='block'
    }

    let [email, setEmail] = useState({email:''});

    return (
        <div>

            <form className="w-50 m-auto p-3" onSubmit={my_request}>
                <div className="mb-3">

                    <label htmlFor="exampleInputEmail1" className="form-label">Для получения новостей введите адрес
                        электронной почты</label>

                    <input type="email" className="form-control" aria-describedby="emailHelp"
                           placeholder="e-mail" id="name" required onChange={(e)=>setEmail({email:e.target.value})}/>

                    <div id="emailHelp" className="form-text">Мы никогда не распространяем Ваши e-mail другим людям.</div>

                </div>
                <input type={"submit"} className="button" value={'Подписаться'}/>

                <div id={'message'} style={{display:'none'}} className="text-center">
                    <label htmlFor="name" className="text-success w-25">Вы успешно подписались!</label>
                </div>

                <div id={'error'} style={{display:'none'}} className="text-center">
                    <label htmlFor="name" className="text-success w-25">Подписка не удалась. Попробуйте снова.</label>
                </div>
            </form>
        </div>
    );
};

export default Subscribe;
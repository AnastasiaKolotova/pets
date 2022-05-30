import React from 'react';

const Modal = () => {
    return (
        <div className="modal fade" id="signinModal" tabIndex="-1" aria-labelledby="signinModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="signinModalLabel">Вход</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Адрес электронной
                                    почты</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp"/>
                                <div id="emailHelp" className="form-text">Мы никогда не распространяем Ваши e-mail
                                    другим людям.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                                <input type="checkbox" id="gridCheck" className="form-check-input"/>
                                <label htmlFor="gridCheck" className="form-check-label">Сохранить пароль</label>
                            </div>
                        </form>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="butt" data-bs-dismiss="modal">Вернуться</button>
                        <button type="button" className="button">Войти</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
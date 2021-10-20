import React from 'react'
import imgError404 from '../../media/404.png'
import './Error404.css'
const Error404 = () => {
    return (
    <div class="conten">
        <div class="conten__img">
            <img src={imgError404} alt=""/>
            <p class="conten__number">
                404
            </p>
        </div>
        <div class="conten__Description">
            <p class="conten__error">
                UPSSSS!!!! Algo salio mal, pagina no encontrada.
            </p>
        <a href="#" class="conten__button">SACAME DE AQUI!.</a>
        </div>
    </div>
    )
}

export default Error404

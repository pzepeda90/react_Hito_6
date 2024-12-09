import React from 'react'
import { useState } from 'react'

export default function Formulario() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [error, setError] = useState(false);

    const validarDatos = (e) => {
        e.preventDefault();
        setError(false);

        if (!email || !password || !confirmPassword) {
            setError(true);
            alert('Todos los campos son obligatorios');
            return;
        }

        if (password.length < 6) {
            setError(true);
            alert('La contraseña debe tener al menos 6 caracteres');
            return;
        }

        if (password !== confirmPassword) {
            setError(true);
            alert('Las contraseñas no coinciden');
            return;
        }

        setEmail('');
        setPassword('');
        setConfirmPassword('');
        alert('Datos enviados correctamente');
    }
  return (
    <>
        <form className='formulario' onSubmit={validarDatos}>
            <div className='form__group'>
                <label>E-mail</label>
                <input 
                    type="text" 
                    name='email'
                    className='form__control' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className='form__group'>
                <label>Contraseña</label>
                <input 
                    type="text" 
                    name='password'
                    className='form__control' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className='form__group'>
                <label>Confirmar contraseña</label>
                <input 
                    type="text" 
                    name='confirmPassword'
                    className='form__control' 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            
            <button type='submit' className='btn btn-primary'>Enviar</button>

        </form>
    </>
  )
}

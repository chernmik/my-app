import React from 'react'
import { useForm } from "react-hook-form";
import 'leaflet/dist/leaflet.css'
import axios from 'axios';


const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        axios.post('https://64439d2090738aa7c0742e2b.mockapi.io/form', data)
        alert('Заявка отправлена')
    }

  return (
    <div>
        <form id='form' onSubmit={handleSubmit(onSubmit)}>
            <h1>Заполните заявку на обратную связь</h1>
        <div className='input-group mb-3'>
            <input
            {...register('lastName', {
                required: true,
                maxLength:50,
                pattern: /^[А-Яа-яA-Za-z]+$/i
            })}
            type="text"
            className='form-control'
            placeholder='Фамилия'/>
        </div>
        {errors?.lastName?.type === 'required'&&(
            <p>Поле обязательно для заполнения</p>
        )}

        {errors?.lastName?.type === 'maxLength'&&(
            <p>Поле не может содержать более 50 символов</p>
        )}
        {errors?.lastName?.type === 'pattern'&&(
            <p>Поле заполненно некорректно</p>
        )}

        <div className='input-group mb-3'>
            <input
            {...register('firstName', {
                required: true,
                maxLength:50,
                pattern: /^[А-Яа-яA-Za-z]+$/i
            })}
            type="text"
            className='form-control'
            placeholder='Имя'/>
        </div>
        {errors?.firstName?.type === 'required'&&(
            <p>Поле обязательно для заполнения</p>
        )}

        {errors?.firstName?.type === 'maxLength'&&(
            <p>Поле не может содержать более 50 символов</p>
        )}

        {errors?.firstName?.type === 'pattern'&&(
            <p>Поле заполненно некорректно</p>
        )}


        <div className='input-group mb-3'>
            <input
            {...register('middleName', {
                required: true,
                maxLength:50,
                pattern: /^[А-Яа-яA-Za-z]+$/i
            })}
            type="text"
            className='form-control'
            placeholder='Отчество'/>
        </div>
        {errors?.middleName?.type === 'required'&&(
            <p>Поле обязательно для заполнения</p>
        )}

        {errors?.middleName?.type === 'maxLength'&&(
            <p>Поле не может содержать более 50 символов</p>
        )}

        {errors?.middleName?.type === 'pattern'&&(
            <p>Поле заполненно некорректно</p>
        )}

        <div className='input-group mb-3'>
            <input
            {...register('email', {
                required: true,
                maxLength:50,
                pattern: /^[A-Za-z@._-]+$/i
            })}
            type="text"
            className='form-control'
            placeholder='Email'/>
        </div>
        {errors?.email?.type === 'required'&&(
            <p>Поле обязательно для заполнения</p>
        )}

        {errors?.email?.type === 'maxLength'&&(
            <p>Поле не может содержать более 50 символов</p>
        )}

        {errors?.email?.type === 'pattern'&&(
            <p>Поле заполненно некорректно</p>
        )}
        <div>
          <input className='btn btn-outline-primary' type="submit" value="Отправить"/>
        </div>
        </form>
    </div>
  )
}

export default Form
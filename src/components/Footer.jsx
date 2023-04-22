import React from 'react'

const Footer = () => {
  return (
    <div className='conteiner'>
        <footer className='row row-col-cols-1 row-cols-sm-2 row-cols-md-5 pt-4 my-3 border-top'>
          <div className='col mb-3'>
            <a href='/'>
              <img src='img/logo.png' alt='' className='bi me-2 mx-5' width={100}/>
            </a>
            <p className='bi me-2 mx-5'>Gadget Shop</p>
          </div>
          <div className='col mb-4'>
            <h5>О нас</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-3'><a href='/' className='nav-link p-0 text-muted'>Контакты</a></li>
              <li className='nav-item mb-3'><a href='/' className='nav-link p-0 text-muted'>Вакансии</a></li>
            </ul>
          </div>

        </footer>
    </div>
  )
}

export default Footer
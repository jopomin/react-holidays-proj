import React from 'react'

const Vacanza = ({ titolo, descrizione, durata, img, prezzo, next, prev }) => {
  return (
    <div className='holycard'>
      <div className='hc_pic'>
        <img src={img} alt={titolo} height={240} />
      </div>
      <div className='hc_content'>
        <h4>{titolo}</h4>
        <p className='hc_cont_descr'>{descrizione}</p>
        <div className='hc_content_info'>
          <p>{durata}</p>
          <p>{(prezzo / 100).toFixed(2)}€</p>
        </div>
        <div className='hc_buttons'>
          <button onClick={prev}>Prev</button>
          <button onClick={next}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default Vacanza

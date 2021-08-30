import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Vacanza from './Vacanza'

const url = 'https://react-corso-api.netlify.app/.netlify/functions/holiday'

const Corpo = () => {
  const [vacanze, setVacanze] = useState([])
  const [selected, setSelected] = useState(0)

  // funzione per scorrere le Slide. Se il valore è uguale alla lunghezza dell'array, quindi è arrivato alla fine, tornerà a 0, cioè all'inizio dello slider. Altrimenti continuerà a scorrere di 1.
  const nextSlide = () => {
    setSelected((preVal) => {
      if (preVal + 1 === vacanze.data.length) {
        return 0
      } else {
        return preVal + 1
      }
    })
  }

  const prevSlide = () => {
    setSelected((preVal) => {
      if (preVal - 1 < 0) {
        return vacanze.data.length - 1
      } else {
        return preVal - 1
      }
    })
  }

  //Scrivo la funzione che realizza la chiamata axios e imposta il valore di 'Vacanze' con la promise (response). In caso di errore emetterà lo stesso nella Console.
  const getVacanze = async () => {
    try {
      const response = await axios.get(url)
      setVacanze(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  //La chiamata axios, grazie e useEffect verrà realizzata quando ci sarà il render della pagina. (Una sola volta grazie all'inserimento delle parentesi quadre come secondo parametro della funzione)
  useEffect(() => {
    getVacanze()
  }, [])

  useEffect(() => {
    console.log(selected)
  })

  if (vacanze.success) {
    return (
      <>
        {vacanze.data.length > 0 ? (
          <Vacanza
            {...vacanze.data[selected]}
            next={nextSlide}
            prev={prevSlide}
          />
        ) : (
          <h4>Niente Vacanze</h4>
        )}
      </>
    )
  } else {
    return <h2>Loading...</h2>
  }
}

export default Corpo

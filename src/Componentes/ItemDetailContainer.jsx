import React from 'react'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
    const {id} = useParams
    console.log(id)
  return (
    <div>
      sadasd
    </div>
  )
}

export default ItemDetailContainer

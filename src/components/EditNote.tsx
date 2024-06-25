import React from 'react'
import { useParams } from 'react-router-dom'

const EditNote = () => {
   const {id} = useParams<{id:string}>()

   
  return (
    <div>Edit note ID:{id}</div>
  )
}

export default EditNote
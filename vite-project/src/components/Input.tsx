/* eslint-disable import/no-duplicates */
import React from 'react'
import { Button } from '@mui/material'
import { ChangeEvent } from 'react'

interface NewNameProps {
  addName(name: string): void
}
const Input: React.FC<NewNameProps> = ({ addName }) => {
  const [name, setName] = React.useState('')

  const updateName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const onAddNoteClick = () => {
    addName(name)
    setName('')
  }
  return (
    <div>
      <input
        onChange={updateName}
        value={name}
        type="text"
        name="name"
        placeholder="Name"
      />
      <Button onClick={onAddNoteClick}>Add User</Button>
    </div>
  )
}

export default Input

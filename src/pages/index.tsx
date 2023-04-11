import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface Users {
  id: string
  name: string
}

const users = () => {
  const [users, setUsers] = useState<Users[]>([])
  useEffect(() => {
    const promise = axios.get(process.env.NEXT_PUBLIC_API_URL || '')

    promise.then((res) => {
      setUsers(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  console.log(users)

  return (
    <div>
      <h1 style={{ marginBottom: '1rem' }}>Users</h1>
      <ul style={{ paddingLeft: '1rem' }}>
        {users.map((user) => (
          <li style={{ marginBottom: '.5rem' }} key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default users

import { getSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Image from 'next/image';

function HomePage() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    (async () => {
      const session = await getSession()
      console.log(session.user)
      setUser(session?.user)
    })();
  }, [])

  return (
    <div>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
      {user?.image ? (
        <Image src={user.image} alt={user.name || ''} width={40} height={40} />
      ) : (
        <p>No hay imagen disponible</p>
      )}
    </div>
  )
}

export default HomePage
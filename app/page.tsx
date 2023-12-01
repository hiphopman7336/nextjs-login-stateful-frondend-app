"use client"
import React from 'react'
import { useSession, signIn, signOut} from "next-auth/react"

export default function Page() {
  const { data: session } = useSession()
  if (session) {
    <>
      Signed in as {session.user?.email} <br />
      <button onClick={()=> signOut}>Sign Out</button>
    </>
  } else { 
    return(
    <>
      Not Signed in  <br />
      <button onClick={() => signIn}>Sign In</button>
    </>)
  }

  return (
    <div>
      <h1>
        Hello World NextJs
      </h1>
    </div>
  )
}

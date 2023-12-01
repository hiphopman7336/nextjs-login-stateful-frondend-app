import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    //Providers Credentials
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password"},
            },
            async authorize(credentials) { 
                const res = await fetch('https://www.melivecode.com/api/login', { 
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { 'Content-Type': 'application/json' }                   
                })
                const response = await res.json()
                if (response.status === 'ok') {
                    return response.user
                }

                return null
            }
        })
    ]


})

export { handler as GET, handler as POST }
import NextAuth from "next-auth/next";
import GithubProvider from 'next-auth/providers/github';

const providers = [
  {
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
  }
]

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: providers[0].clientId,
      clientSecret: providers[0].clientSecret
    })
  ]
})
import { useRouter } from 'next/router'
import React from 'react'

const ErrorPage = () => {
    const router =useRouter()

    setTimeout(()=>{router.push('/')},2000)
  return (
    <div>404</div>
  )
}

export default ErrorPage
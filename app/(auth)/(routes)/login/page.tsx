import React from 'react'
import LoginForm from './_components/login-form'
import { Metadata } from 'next'
import ContainerCard from '@/components/ui/container'

type Props = {}

export const metadata: Metadata = {
  title: 'ChampsLMS - Login',
}

const LoginPage = (props: Props) => {
  return (
    <ContainerCard className="bg-red-500">
      <LoginForm />
    </ContainerCard>
  )
}

export default LoginPage

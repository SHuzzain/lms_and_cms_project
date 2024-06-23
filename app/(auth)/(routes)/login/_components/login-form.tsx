'use client'
import React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Typography from '@/components/Typographys/text-variants'
import Image from 'next/image'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { FcGoogle } from 'react-icons/fc'
import { FaArrowRight, FaMicrosoft } from 'react-icons/fa'
import LoginBanner from './login-banner'

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(4).max(20),
})

function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  return (
    <div className="bg-[#fdfdfd] h-screen">
      <div className="flex h-full">
        {/* login form */}
        <div className="flex flex-col flex-[0.5] justify-center gap-5 p-4 overflow-hidden">
          <section className="relative h-20">
            <Typography tag="h2" variant={'hTag'} size={'h2'} className="text-center">
              Sign in to your account
            </Typography>
          </section>

          <section className="">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold md:text-lg">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Username or Email ID" className="md:py-6" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex flex-wrap justify-between items-end gap-3 font-semibold md:text-lg">
                        Password
                        <Typography
                          variant={'muted'}
                          tag="p"
                          size={'small'}
                          className="hover:text-black cursor-pointer"
                        >
                          Forget password?
                        </Typography>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter password"
                          className="md:py-6"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="flex items-center px-2 w-36 group" size={'lg'}>
                  Sign In
                  <FaArrowRight className="ml-3 transition-transform group-hover:translate-x-3" />
                </Button>

                <div className="flex flex-wrap [&>button]:flex-[calc(10/3)] gap-5">
                  <Button variant={'outline'} type="button" className="flex items-center gap-3">
                    <FcGoogle size={18} /> Google
                  </Button>

                  <Button variant={'outline'} type="button" className="flex items-center gap-3">
                    <GitHubLogoIcon fontSize={18} /> GitHub
                  </Button>

                  <Button variant={'outline'} type="button" className="flex items-center gap-3">
                    <FaMicrosoft /> Microsoft
                  </Button>
                </div>
              </form>
            </Form>
          </section>
        </div>
        {/* login banner */}
        <div className="relative flex-[0.5]">
          <LoginBanner />
        </div>
      </div>
    </div>
  )
}

export default LoginForm

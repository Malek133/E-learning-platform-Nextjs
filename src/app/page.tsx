import {BadgeDollarSign, HeartPulse, Zap} from 'lucide-react'

import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import Image from 'next/image'
import Link from 'next/link'

import {buttonVariants} from '@/components/ui/button'
import {cn} from '@/lib/utils'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1">
        <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    E-learning-platform 
                    
                  </h1>
                  <p className="max-w-[600px] text-foreground/50 md:text-xl">
                    A powerful e-learning platform that transforms knowledge into action. 
                    Learn from experts, track your progress, and grow your skills anytime, 
                    anywhere.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/sign-in"
                    className={cn(buttonVariants(), 'px-8')}
                  >
                    Start
                  </Link>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-video">
                <Image
                  src="/images/screenshot-dark.png"
                  alt="Logo"
                  width={1000}
                  height={1000}
                  className="hidden dark:block"
                />

                <Image
                  src="/images/screenshot-light.png"
                  alt="Logo"
                  width={1000}
                  height={1000}
                  className="block dark:hidden"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
                  Key element
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Fast, simple, and reliable.
                </h2>
                <p className="max-w-[900px] text-foreground/50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  An e-learning platform built to empower entrepreneurs and professionals 
                  with practical knowledge, performance tracking, and tools for long-term success.”

                   If you want it shorter, more persuasive, or focused on 
                   entrepreneurs/fitness/finance (like your previous texts), 
                   tell me and I’ll tailor it exactly 🚀
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-10">
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last">
                <Image
                  src="/images/element-key-dark.png"
                  alt="Logo"
                  width={1000}
                  height={1000}
                  className="hidden dark:block"
                />

                <Image
                  src="/images/element-key-light.png"
                  alt="Logo"
                  width={1000}
                  height={1000}
                  className="block dark:hidden"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="flex flex-row gap-x-2 text-xl font-bold">
                        <BadgeDollarSign /> Argent
                      </h3>
                      <p className="text-foreground/50">
                        Tracker vos finances sans vous prendre la tête.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="flex flex-row gap-x-2 text-xl font-bold ">
                        <HeartPulse /> Santé
                      </h3>
                      <p className="text-foreground/50">
                        Garder une trace de vos temps d&apos;exercice.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="flex flex-row gap-x-2 text-xl font-bold ">
                        <Zap /> Rapide
                      </h3>
                      <p className="text-foreground/50">
                        En quelques cliques, ajouter ou modifier rapidement vos
                        finances et vos temps d&apos;exercice.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}

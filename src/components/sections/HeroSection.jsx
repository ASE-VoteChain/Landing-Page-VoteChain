import React from 'react'
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
     <section className="bg-background py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className='flex flex-col items-center md:items-start text-center md:text-left'>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Democracia digital Transparente y Segura
              </h1>
              <p className="text-primary mb-6">
                VoteChain es la plataforma descentralizada que transforma la
                manera en que votamos. Utilizamos tecnología blockchain para
                asegurar transparencia, trazabilidad y confianza en cada
                elección.
              </p>
              <Link
                href="#more-info"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary border-2 text-[#00304d] font-medium rounded hover:bg-[#00304d]  transition-colors hover:text-white"
              >
                Más información
              </Link>
            </div>
            <div className="flex justify-center">
              <Image
                src="/shield-check.png"
                alt="VoteChain Security Shield"
                width={400}
                height={400}
                priority
              />
            </div>
          </div>
        </div>
      </section>
  )
}

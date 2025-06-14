import React from 'react'
import Image from "next/image";

export const CitizensSection = () => {
  return (
     <section id="citizens" className="py-16 bg-background scroll-mt-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-4">
                    Para ciudadanos
                  </h2>
                  <p className="text-primary mb-4">
                    Con VoteChain, votar es tan fácil como hacer clic. Sin colas,
                    sin papeleos, sin complicaciones.
                  </p>
                  <ul className="space-y-2 text-primary">
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>Accede con tu identidad digital</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>Emite tu voto en segundos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>Verifica que fue contado correctamente</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>Recibe un comprobante seguro en la blockchain</span>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/voting-image.jpg"
                    alt="Ciudadanos votando"
                    width={500}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
  )
}

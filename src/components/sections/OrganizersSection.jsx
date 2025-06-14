import Image from "next/image";

import React from 'react'

export const OrganizersSection = () => {
  return (
    <section id="organizers" className="py-16 bg-[#043553] text-white scroll-mt-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/organizer-image.jpg"
                alt="Organizadores de elecciones"
                width={500}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4">Para organizadores</h2>
              <p className="mb-4">
                VoteChain te permite crear y administrar procesos electorales
                descentralizados en minutos:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Configura votaciones personalizadas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Sube padrones verificados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Define reglas, fechas y candidatos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>
                    Visualiza resultados sin posibilidad de manipulación
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  )
}

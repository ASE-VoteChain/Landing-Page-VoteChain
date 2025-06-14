import React from 'react'
import { Network, Lock, Eye, MonitorSmartphone } from "lucide-react";

export default function MoreInfoSection() {
  return (
    <section id="more-info" className="bg-[#043553] text-white py-16 scroll-mt-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            ¿Por qué VoteChain?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#043553]">
            <div className="bg-[#F3EEE7]  text-primary p-6 rounded-lg flex flex-col items-center text-center">
              <div className="mb-4">
                <MonitorSmartphone className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-2">100% digital</h3>
              <p>
                Participa en procesos electorales desde tu celular o
                computadora.
              </p>
            </div>
            <div className="bg-[#F3EEE7]  text-primary p-6 rounded-lg flex flex-col items-center text-center">
              <div className="mb-4">
                <Network className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-2">Basado en blockchain</h3>
              <p>Cada voto es único, encriptado e inmutable.</p>
            </div>
            <div className="bg-[#F3EEE7] text-primary p-6 rounded-lg flex flex-col items-center text-center">
              <div className="mb-4">
                <Eye className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-2">Auditable por todos</h3>
              <p>Los resultados son públicos y verificables en tiempo real.</p>
            </div>
            <div className="bg-[#F3EEE7]  text-primary p-6 rounded-lg flex flex-col items-center text-center">
              <div className="mb-4">
                <Lock className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-2">Privacidad garantizada</h3>
              <p>Tu identidad está protegida. Tu decisión también.</p>
            </div>
          </div>
        </div>
      </section>
  )
}

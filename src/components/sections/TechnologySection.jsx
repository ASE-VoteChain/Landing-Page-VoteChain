import React from 'react'
import Image from "next/image";

export const TechnologySection = () => {
  return (
     <section
        className="py-60 bg-black text-white"
        style={{
          backgroundImage: "url('/blockchain-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Tecnología que respalda la democracia
            </h2>
            <p className="mb-4">
              VoteChain está construido sobre principios de seguridad y
              descentralización. Utiliza una blockchain pública y verificable,
              con criptografía de extremo a extremo para proteger cada voto. Su
              infraestructura distribuida elimina puntos únicos de fallo y
              garantiza trazabilidad total sin comprometer la privacidad del
              votante.
            </p>
            <p>
              Confía en un sistema donde el poder no está centralizado: la
              transparencia es colectiva y la confianza, programada.
            </p>
          </div>
        </div>
      </section>
  )
}

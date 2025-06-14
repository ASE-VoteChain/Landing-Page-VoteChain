import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-gray-200 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center">
              <Image src="/votechain-logo.svg" alt="VoteChain Logo" width={150} height={150} />
            
            </Link>
          </div>

          <div>
            <h3 className="text-primary font-bold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary hover:text-secondary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#citizens" className="text-primary hover:text-secondary">
                  Ciudadanos
                </Link>
              </li>
              <li>
                <Link href="/#organizers" className="text-primary hover:text-secondary">
                  Organizadores
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-primary font-bold mb-4">Contáctanos</h3>
            <ul className="space-y-2">
              <li className="text-primary">Email: info@votechain.com</li>
              <li className="text-primary">Teléfono: (01) 456-7890</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#043553] text-center text-primary">
          <p>© 2025 VoteChain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

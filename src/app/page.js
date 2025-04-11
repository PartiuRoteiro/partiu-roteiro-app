import Image from 'next/image'
import TallyForm from '../TallyForm'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-orange-500 p-6">
      <Image
        src="/logo.png"
        alt="Logo Partiu Roteiro"
        width={150}
        height={150}
        className="mb-6"
      />

      <h1 className="text-4xl font-bold mb-2 text-center">
        Bem-vindo ao Partiu Roteiro!
      </h1>

      <p className="text-lg text-blue-400 text-center max-w-md mb-8">
        Crie roteiros personalizados de forma fácil e divertida. 🚀
      </p>

      <TallyForm />
    </main>
  )
}

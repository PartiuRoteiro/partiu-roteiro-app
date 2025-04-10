export default function Home() {
  return (
    <main style={{ minHeight: '100vh', padding: '2rem', fontFamily: 'sans-serif', background: '#f0f0f5' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <img src="/logo.png" alt="Logo Partiu Roteiro" style={{ height: '100px' }} />
        <h1 style={{ fontSize: '2rem', marginTop: '1rem' }}>Bem-vindo ao Partiu Roteiro!</h1>
        <p>Preencha o formulário abaixo e receba um roteiro incrível personalizado para sua viagem! 🌎✈️</p>
      </div>

      <div style={{ width: '100%', maxWidth: '700px', margin: '0 auto' }}>
        <iframe 
          data-tally-src="https://tally.so/r/3x6pL9?transparentBackground=1"
          loading="lazy" 
          width="100%" 
          height="800" 
          frameBorder="0" 
          title="Formulário de Roteiro"
        ></iframe>
        <script async src="https://tally.so/widgets/embed.js"></script>
      </div>
    </main>
  );
}

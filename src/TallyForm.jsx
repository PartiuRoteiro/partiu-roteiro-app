'use client'
import { useEffect } from 'react'

export default function TallyForm() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://tally.so/widgets/embed.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <div className="w-full max-w-2xl">
      <iframe
        data-tally-src="https://tally.so/embed/3x6pL9?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="500"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Formulário Partiu Roteiro"
        scrolling="no"
      ></iframe>
    </div>
  )
}

import './globals.css'
export const metadata = {
  title: 'Omar Ahmed — MERN Stack Developer',
  description: 'MERN Stack Developer — Omar Ahmed. Building full-stack apps with React, Node, Express and MongoDB.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

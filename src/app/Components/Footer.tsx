export default function Footer() {
  return (
    <footer className="py-8">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Omar Ahmed. Built with Next.js.
      </div>
    </footer>
  )
}

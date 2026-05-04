import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error')
      setStatusMessage('All fields are required.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus('error')
      setStatusMessage('Please enter a valid email address.')
      return
    }

    // Simulate sending
    setStatus('loading')
    setTimeout(() => {
      setStatus('success')
      setStatusMessage('Message sent successfully! I will get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    }, 1000)
  }

  return (
    <section id="contact" className="bg-[#ECF1AF] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#0A4646]">LET'S CONNECT</h2>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A4646]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A4646]"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A4646]"
            ></textarea>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-[#0A4646] text-white p-3 rounded-lg hover:bg-[#083d3d] transition disabled:bg-gray-400"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {status === 'success' && (
            <div className="mt-4 p-3 bg-green-100 text-[#0A4646] rounded-lg text-center">{statusMessage}</div>
          )}
          {status === 'error' && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg text-center">{statusMessage}</div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
import { useState } from 'react'

// CUSTOMISE: Subject options for the enquiry dropdown
const subjects = [
  'General Enquiry',
  'Make a Donation',
  'Volunteering',
  'Corporate Partnership',
  'Media & Press',
  'Other',
]

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName:  '',
    email:     '',
    phone:     '',
    subject:   subjects[0],
    message:   '',
    giftAid:   false,
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // NOTE: Connect to your form backend, Formspree, or email service here
    console.log('Form data:', form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl shadow-premium p-10 text-center">
        <div className="w-16 h-16 bg-forest-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-forest" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl font-bold text-forest-dark mb-3">Message Received</h3>
        <p className="text-gray-500 mb-6">
          Thank you for getting in touch. A member of our team will respond within two working days.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-sm text-forest font-medium hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-premium p-8 md:p-10 space-y-5">
      <h3 className="font-serif text-2xl font-bold text-forest-dark mb-2">Send Us a Message</h3>

      {/* Name row */}
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="block text-sm font-medium text-gray-600 mb-1.5">First name *</span>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            required
            placeholder="Jane"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all text-sm"
          />
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-gray-600 mb-1.5">Last name *</span>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
            placeholder="Smith"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all text-sm"
          />
        </label>
      </div>

      {/* Email + phone */}
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="block text-sm font-medium text-gray-600 mb-1.5">Email address *</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="jane@example.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all text-sm"
          />
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-gray-600 mb-1.5">Phone (optional)</span>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+44 7700 000000"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all text-sm"
          />
        </label>
      </div>

      {/* Subject */}
      <label className="block">
        <span className="block text-sm font-medium text-gray-600 mb-1.5">Subject *</span>
        <select
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all text-sm bg-white"
        >
          {subjects.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </label>

      {/* Message */}
      <label className="block">
        <span className="block text-sm font-medium text-gray-600 mb-1.5">Your message *</span>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="How can we help you?"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all text-sm resize-none"
        />
      </label>

      {/* Privacy consent */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          name="giftAid"
          checked={form.giftAid}
          onChange={handleChange}
          className="mt-0.5 w-4 h-4 rounded border-gray-300 text-forest focus:ring-forest"
        />
        <span className="text-xs text-gray-500 leading-relaxed">
          I agree to my data being used to respond to this enquiry in accordance with your{' '}
          {/* CUSTOMISE: Link to your privacy policy */}
          <a href="#" className="text-forest underline underline-offset-2">Privacy Policy</a>.
        </span>
      </label>

      <button
        type="submit"
        className="w-full bg-forest hover:bg-forest-light text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-green hover:shadow-lg"
      >
        Send Message
      </button>
    </form>
  )
}

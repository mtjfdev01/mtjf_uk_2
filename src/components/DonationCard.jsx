import { useState } from 'react'
import { donationAmounts, donationImpact } from '../data'
import Icon from './Icons'

// compact prop: true = smaller padding (for hero overlay use)
export default function DonationCard({ compact = false }) {
  const [frequency,    setFrequency]    = useState('monthly')   // 'monthly' | 'one-time'
  const [selected,     setSelected]     = useState(25)
  const [customAmount, setCustomAmount] = useState('')
  const [showCustom,   setShowCustom]   = useState(false)

  const displayAmount = showCustom
    ? (parseFloat(customAmount) || 0)
    : selected

  const impactText = donationImpact[selected] ?? donationImpact[25]

  function handlePreset(amt) {
    setSelected(amt)
    setShowCustom(false)
    setCustomAmount('')
  }

  function handleCustomClick() {
    setShowCustom(true)
    setSelected(null)
  }

  const pad = compact ? 'p-7' : 'p-8 md:p-10'

  return (
    <div className={`bg-white rounded-3xl shadow-premium-lg ${pad} w-full`}>
      {/* Header */}
      <h3 className="font-serif text-2xl font-bold text-forest-dark mb-1">
        Be a Founding Supporter
      </h3>
      <p className="text-sm text-gray-400 mb-6">We just launched. Help us take our very first steps.</p>

      {/* Frequency toggle */}
      <div className="flex rounded-xl bg-cream p-1 mb-6">
        {['monthly', 'one-time'].map((f) => (
          <button
            key={f}
            onClick={() => setFrequency(f)}
            className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
              frequency === f
                ? 'bg-forest text-white shadow-sm'
                : 'text-gray-500 hover:text-forest-dark'
            }`}
          >
            {f === 'monthly' ? 'Monthly' : 'One-time'}
          </button>
        ))}
      </div>

      {/* Amount presets */}
      <div className="grid grid-cols-4 gap-2 mb-3">
        {donationAmounts.map((amt) => (
          <button
            key={amt}
            onClick={() => handlePreset(amt)}
            className={`py-3 rounded-xl text-sm font-semibold transition-all duration-200 border-2 ${
              selected === amt && !showCustom
                ? 'bg-forest text-white border-forest shadow-green'
                : 'bg-white text-forest-dark border-gray-200 hover:border-forest hover:bg-forest-50'
            }`}
          >
            £{amt}
          </button>
        ))}
      </div>

      {/* Custom amount */}
      <button
        onClick={handleCustomClick}
        className={`w-full py-3 rounded-xl text-sm font-medium border-2 transition-all duration-200 mb-6 ${
          showCustom
            ? 'border-forest bg-forest-50'
            : 'border-dashed border-gray-200 text-gray-400 hover:border-forest hover:text-forest'
        }`}
      >
        {showCustom ? (
          <div className="flex items-center justify-center gap-2 px-4">
            <span className="text-forest font-semibold">£</span>
            <input
              type="number"
              min="1"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              placeholder="Enter amount"
              className="bg-transparent text-center text-forest-dark font-semibold w-full focus:outline-none placeholder-gray-300"
              autoFocus
            />
          </div>
        ) : (
          'Other amount'
        )}
      </button>

      {/* Impact description */}
      {!showCustom && selected && (
        <div className="flex items-start gap-3 bg-forest-50 rounded-xl px-4 py-3.5 mb-6">
          <Icon name="check" className="w-4 h-4 text-forest mt-0.5 flex-shrink-0" />
          <p className="text-xs text-forest-dark leading-relaxed">
            <span className="font-semibold">£{selected}</span> {frequency === 'monthly' ? 'per month' : ''} {impactText}
          </p>
        </div>
      )}

      {/* CTA button */}
      <button className="w-full bg-forest hover:bg-forest-light text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-green hover:shadow-lg text-base mb-4">
        {/* NOTE: Connect to your payment gateway here */}
        Donate {displayAmount > 0 ? `£${displayAmount}` : ''} {frequency === 'monthly' ? 'Monthly' : 'Now'}
      </button>

      {/* Trust badge */}
      <div className="flex items-center justify-center gap-2 text-gray-400">
        <Icon name="lock" className="w-3.5 h-3.5" />
        <span className="text-xs">Secure donation · MTJF · Registration in Progress</span>
      </div>
    </div>
  )
}

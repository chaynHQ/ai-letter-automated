'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { useState } from 'react'

export default function LetterPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const submission = searchParams.get('submission')
  const [letterContent, setLetterContent] = useState(
    sessionStorage.getItem('complaintLetter') || ''
  )

  const handleLetterChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLetterContent(e.target.value)
  }

  const handleContinue = () => {
    sessionStorage.setItem('complaintLetter', letterContent)
    router.push('/complaint/options')
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column - User Submission */}
        <div>
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-pink-200 pb-2 inline-block">
            Your submission
          </h2>
          <Card className="p-6 bg-white">
            <div className="space-y-4 text-gray-700">
              <p>{submission}</p>
            </div>
          </Card>
        </div>

        {/* Right Column - Generated Letter */}
        <div>
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-[#C8D6B9] pb-2 inline-block">
            Generated Letter
          </h2>
          <Card className="p-6 bg-white shadow-lg relative">
            <div className="space-y-4 text-gray-700">
              <textarea
                className="w-full min-h-[400px] p-4 border rounded-md font-sans"
                value={letterContent}
                onChange={handleLetterChange}
                placeholder="Edit your letter here..."
              />
            </div>
          </Card>

          <div className="flex justify-end gap-4 mt-6">
            <Button
              className="bg-pink-200 hover:bg-pink-300 text-gray-800"
              onClick={handleContinue}
            >
              Continue with the Letter
            </Button>
          </div>
        </div>
      </div>

      {/* Help Notice */}
      <div className="mt-12 bg-pink-100 p-6 rounded-lg flex items-start gap-4">
        <div className="p-2 bg-white rounded-full">
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 8v4M12 16h.01" />
          </svg>
        </div>
        <div>
          <p className="font-medium">Do you need immediate help?</p>
          <p>Call the police or try these resources.</p>
        </div>
      </div>
    </div>
  )
}

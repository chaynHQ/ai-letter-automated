'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Quote } from 'lucide-react'

export default function OptionsPage() {
  const [letterContent, setLetterContent] = useState('')

  useEffect(() => {
    // Load letter content from sessionStorage on component mount
    const savedLetter = sessionStorage.getItem('complaintLetter')
    if (savedLetter) {
      setLetterContent(savedLetter)
    }
  }, [])

  const handleDownload = () => {
    // Create blob with letter content
    const blob = new Blob([letterContent], { type: 'text/plain' })
    // Create download link
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'complaint-letter.txt'

    // Trigger download
    document.body.appendChild(link)
    link.click()

    // Cleanup
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 border-b-2 border-pink-200 pb-2 inline-block">
          Your Options
        </h1>

        <p className="text-gray-700 mb-12">
        Here are some options for next steps—whether it’s sending your letter, exploring resources, or seeking further support.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Download Letter Option */}
          <Card className="p-6 bg-white relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#C8D6B9]"></div>
            <Quote className="w-6 h-6 text-[#C8D6B9] mb-4" />
            <h2 className="text-xl font-semibold mb-4">Download the letter</h2>
            <p className="text-gray-600 mb-6">
              Downloaded letter will be in .txt format
            </p>
            <Button
              variant="outline"
              className="bg-[#F2F7ED] hover:bg-[#E5EDE0] text-gray-800 border-[#C8D6B9]"
              onClick={handleDownload}
              disabled={!letterContent}
            >
              Download
            </Button>
          </Card>

          {/* Find support services */}
          <Card className="p-6 bg-white relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-pink-200"></div>
            <Quote className="w-6 h-6 text-pink-300 mb-4" />
            <h2 className="text-xl font-semibold mb-4">Gain support</h2>
            <p className="text-gray-600 mb-6">Find support services<br></br>near you
            </p>
            <a href="https://www.chayn.co/global-directory" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="bg-pink-50 hover:bg-pink-100 text-gray-800 border-pink-200"
            >
              Find out more
            </Button>
            </a>
          </Card>

          {/* Other Options */}
          <Card className="p-6 bg-white relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#B8C0E0]"></div>
            <Quote className="w-6 h-6 text-[#B8C0E0] mb-4" />
            <h2 className="text-xl font-semibold mb-4">Learn more</h2>
            <p className="text-gray-600 mb-6">Empowering resources for survivors</p>
            <a href="https://www.chayn.co/resources" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="bg-[#EEF0F7] hover:bg-[#E2E5F0] text-gray-800 border-[#B8C0E0]"
            >
              Find out more
            </Button>
            </a>
          </Card>
        </div>

        {/* Help Notice */}
        {/* <div className="bg-pink-100 p-6 rounded-lg flex items-start gap-4"> */}
          {/* <div className="p-2 bg-white rounded-full">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 8v4M12 16h.01" />
            </svg>
          </div> */}
          {/* <div>
            <p className="font-medium">Do you need immediate help?</p>
            <p>Call the police or try these resources.</p>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  )
}

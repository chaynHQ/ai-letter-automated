import { ComplaintForm } from '@/components/ComplaintForm';

export default function ComplaintPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 underline underline-offset-8 decoration-primaryDark">
          Write down what happened
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <p className="font-medium">Guideline text</p>
            <ul className="space-y-4 text-gray-700 list-disc">
              <li><strong>General information:</strong> Include the police force's name, the date, time, location of the incident, the accused's name or relationship, and the crime reference number (if known).</li>
              <li><strong>Incident details:</strong> Briefly describe what happened, the type of crime (e.g., sexual or physical abuse), and key actions by the perpetrator.</li>
              <li><strong>Reporting details:</strong> Note when and where you reported the crime, how the police handled it, and the outcome if you have one (e.g., case closed due to insufficient evidence).</li>
              <li><strong>Police misconduct:</strong> Highlight specific failures, such as not investigating evidence, not contacting witnesses, or treating you dismissively.</li>
              <li><strong>Supporting details:</strong> Mention any records, photos, or statements you provided that the police failed to consider</li>
            </ul>

            {/* <div className="mt-8">
              <p className="text-gray-600 mb-4">&lt;example graphic&gt;</p>
              <Image
                src="/process-diagram.png"
                alt="Process diagram showing the steps of complaint submission"
                width={400}
                height={250}
                className="border rounded-lg"
              />
            </div> */}
          </div>

          <ComplaintForm />
        </div>

        {/* <div className="bg-pink-100 p-6 rounded-lg flex items-start gap-4"> */}
          {/* <div className="p-2 bg-white rounded-full">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
  );
}
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semi-bold mb-8 underline underline-offset-8 decoration-peach-400 mb-10">Make a formal complaint without a lawyer</h1>
        
        <p className="text-lg mb-8 text-gray-700">
          We understand how frustrating and painful it can be when the systems meant to protect us fall short. If you've felt let down by the UK police or criminal justice system, we're here to help you find a way to be heard.
        </p>
        
        <p className="text-lg mb-12 text-gray-700">
          Our letter writing tool is designed to guide you through the process of creating a formal complaint. Whether you want to highlight missteps, express concerns, or challenge a decision to drop your case, this tool helps you take back some control—on your terms, at your pace.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6 border-none">
            <h2 className="text-2xl font-semibold mb-4 underline underline-offset-8 decoration-peach-400 mb-6">Things to know before you get started:</h2>
            <ul className="space-y-4">
              <li className="flex gap-2">
                <span className="text-gray-700">•</span>
                <span>Anything you submit to the tool will remain completely confidential.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gray-700">•</span>
                <span>Our tool uses AI to turn your submission into a clear and accurate letter.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-gray-700">•</span>
                <span>You'll need some information about your report so the police can find your case. This could be a crime reference number, but don't worry if you don't have this.</span>
              </li>
            </ul>
          </Card>
          <Card className="p-6 border-none">
            <h2 className="text-2xl font-semibold mb-4 underline underline-offset-8 decoration-peach-400 mb-6">Here's how the tool works:</h2>
            <ol className="list-decimal list-inside space-y-4">
              <li>Describe the incident/s you're complaining about in your own words.</li>
              <li>Answer the follow-up questions to provide more details.</li>
              <li>Review and edit the generated letter as needed.</li>
              <li>Explore your options and decide whether to proceed.</li>
            </ol>
          </Card>
        </div>

        <div className="flex justify-end mb-12">
          <Link href="/complaint">
            <Button size="lg" className="bg-pink-200 hover:bg-pink-300 text-gray-800  text-xl">
              Next
            </Button>
          </Link>
        </div>
        {/* <div className="bg-pink-100 p-6 rounded-lg flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-gray-700 mt-1" />
          <div>
            <p className="font-medium">Do you need immediate help?</p>
            <p>Call the police or try these resources.</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
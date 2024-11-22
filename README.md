# AI Complaint Tool

A Next.js application for handling complaints using AI, built with Vercel AI SDK and Langtail.

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Langtail API key

## Getting Started

1. Clone the repository:

```bash
git clone <your-repository-url>
cd ai-letter-automated
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory and add your Langtail API key:

```bash
LANGTAIL_API_KEY=your_api_key_here
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- Next.js 14
- Vercel AI SDK
- Langtail (for prompt management)
- TypeScript
- Tailwind CSS
- Radix UI Components

## Environment Variables

| Variable           | Description                      |
| ------------------ | -------------------------------- |
| `LANGTAIL_API_KEY` | Your Langtail API key (required) |

## License

MIT

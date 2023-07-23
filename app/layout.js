import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Provider from '@/components/Provider'


const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'PromptCraft',
  description: 'Ultimate guide for chatgpt prompts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <main className='max-w-7xl mx-auto max-h-screen py-6 px-2 min-h-screen '>

            <Nav />
            {children}


          </main>
        </Provider>
      </body>
    </html>
  )
}

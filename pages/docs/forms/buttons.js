import Head from 'next/head'
import Sidebar from '../../components/sidebar'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {dracula} from 'react-syntax-highlighter/dist/cjs/styles/prism'

export default function Buttons() {
  return (
    <div className="container mt-3">
      <Head>
        <title>Click Simple | Simply-UI</title>
        <meta name="description" content="Get a Simply simply CSS library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main className="row justify-center flex-nowrap">
            <Sidebar />
            <div className="ml-2 col-12-xs col-10-md col-10-lg">
                <h1>Buttons</h1>
            </div>
        </main>
    </div>
  )
}
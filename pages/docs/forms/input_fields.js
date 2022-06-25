import Head from 'next/head'
import Sidebar from '../../components/sidebar'
import SyntaxHighlighter from 'react-syntax-highlighter';
import {dracula} from 'react-syntax-highlighter/dist/cjs/styles/prism'

export default function Input_Fields() {
  return (
    <div className="container mt-3">
      <Head>
        <title>Breakpoint Simple | Simply-UI</title>
        <meta name="description" content="Get a Simply simply CSS library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main className="row justify-center flex-nowrap">
            <Sidebar />
            <div className="ml-2 col-12-xs col-10-md col-10-lg">
                <h1>Input Fields</h1>
            </div>
        </main>
    </div>
  )
}
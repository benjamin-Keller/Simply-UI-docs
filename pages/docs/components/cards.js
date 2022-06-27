import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../../components/sidebar'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {dracula} from 'react-syntax-highlighter/dist/cjs/styles/prism'

const font_size = `<div className="font-sm">this is font-sm</div>
<div className="font-md">this is font-md</div>
<div className="font-lg">this is font-lg</div>
<div className="font-xl">this is font-xl</div>
<div className="font-xxl">this is font-xxl</div>`;
const font_stack = `<div className="font-helvetica">Helvetica</div>
<div className="font-lucida-grande">Lucida-Grande</div>
<div className="font-verdana">Verdana</div>
<div className="font-system">System</div>
<div className="font-garamond">Garamond</div>
<div className="font-georgia">Georgia</div>
<div className="font-hoefler-text">Hoefler-Text</div>
<div className="font-consolas">Consolas</div>
<div className="font-courier-new">Courier-New</div>
<div className="font-monaco">Monaco</div>
<div className="font-tahoma">Tahoma</div>`;

export default function Cards() {
  return (
    <div className="container mt-3">
      <Head>
        <title>Card Simple | Simply-UI</title>
        <meta name="description" content="Get a Simply simply CSS library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main className="row justify-center flex-nowrap">
            <Sidebar />
            <div className="ml-2 col-12-xs col-10-md col-10-lg">
                <h1>Cards</h1>
            </div>
        </main>
    </div>
  )
}
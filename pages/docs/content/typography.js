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

export default function Typography() {
  return (
    <div className="container mt-3">
      <Head>
        <title>Type Simple | Simply-UI</title>
        <meta name="description" content="Get a Simply simply CSS library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main className="row justify-center flex-nowrap">
            <Sidebar />
            <div className="ml-2 col-12-xs col-10-md col-10-lg">
                <h1>Typography</h1>
                <h2>Defaults</h2>
                <p>By default Simply-UI has a few bases:</p>
                <ul Style="list-style-type: disc;" className="ml-2">
                    <li><code className="text-primary font-consolas">font-stack</code> is <code className="text-secondary font-helvartica font-md">Poppins</code>.</li>
                    <li><code className="text-primary font-consolas">font-size</code> is <code className="text-secondary font-helvartica font-md">16px</code>.</li>
                </ul>

                <h2 className="mt-2">Font Sizes</h2>
                <div className="font-sm">This is font-sm</div>
                <div className="font-md">This is font-md</div>
                <div className="font-lg">This is font-lg</div>
                <div className="font-xl">This is font-xl</div>
                <div className="font-xxl">This is font-xxl</div>
                <SyntaxHighlighter language="html" style={dracula}>
                    {font_size}
                </SyntaxHighlighter>

                <h3 className="mt-1">Sass variables</h3>
                <p className="mb-1">
                    Simply-UI has adjustable font-size variables that you can adjust on your own! <br />
                    Adjusting <code className="text-primary font-helvartica font-md">$base-font-size: 1rem;</code> will adjust all following font-size variables.
                </p>
                <div><code className="text-primary font-helvartica font-md">$base-font-size: 1rem;</code></div>
                <div><code className="text-primary font-helvartica font-md">$font-size-sm: $base-font-size * 0.75;</code></div>
                <div><code className="text-primary font-helvartica font-md">$font-size-lg: $base-font-size * 1.5;</code></div>
                <div><code className="text-primary font-helvartica font-md">$font-size-xl: $base-font-size * 2 1rem;</code></div>
                <div><code className="text-primary font-helvartica font-md">$font-size-xxl: $base-font-size * 3;</code></div>

                <h2 className="mt-2">Font Stacks</h2>
                <p>
                    Simply-UI has multiple built in <code className="text-primary font-consolas">font-stacks</code> that you can set as a single element&apos;s class. <br />
                    You can request a font-stack through our <Link href="https://github.com/benjamin-Keller/Simply-UI"><span className="text-secondary" Style="cursor: pointer">GitHub</span></Link>! <br />
                    The current <code className="text-primary font-consolas">font-stacks</code> built into Simply-UI are:
                </p>
                <div className="row mb-1 mt-1">                
                    <div className="font-helvetica font-lg col-6-sm col-4-md col-3-lg">Helvetica</div>
                    <div className="font-lucida-grande font-lg col-6-sm col-4-md col-3-lg">Lucida-Grande</div>
                    <div className="font-verdana font-lg col-6-sm col-4-md col-3-lg">Verdana</div>
                    <div className="font-system font-lg col-6-sm col-4-md col-3-lg">System</div>
                    <div className="font-garamond font-lg col-6-sm col-4-md col-3-lg">Garamond</div>
                    <div className="font-georgia font-lg col-6-sm col-4-md col-3-lg">Georgia</div>
                    <div className="font-hoefler-text font-lg col-6-sm col-4-md col-3-lg">Hoefler-Text</div>
                    <div className="font-consolas font-lg col-6-sm col-4-md col-3-lg">Consolas</div>
                    <div className="font-courier-new font-lg col-6-sm col-4-md col-3-lg">Courier-New</div>
                    <div className="font-monaco font-lg col-6-sm col-4-md col-3-lg">Monaco</div>
                    <div className="font-tahoma font-lg col-6-sm col-4-md col-3-lg">Tahoma</div>
                </div>
                <SyntaxHighlighter language="html" style={dracula}>
                    {font_stack}
                </SyntaxHighlighter>
            </div>
        </main>
    </div>
  )
}
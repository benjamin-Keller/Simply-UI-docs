import Head from 'next/head'
import Sidebar from '../../components/sidebar'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {dracula} from 'react-syntax-highlighter/dist/cjs/styles/prism'

const sass_breakpoints = `$breakpoints: (
  "xs": 0,
  "sm": 480px,
  "md": 720px,
  "lg": 960px,
  "xl": 1200px
);`;

export default function Breakpoints() {
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
                <h1>Breakpoints</h1>
                <p>Breakpoints are what make Responsive Design. Setting how the page should look and act at any given point.</p>

                <h2 className="mt-2">Defaults</h2>
                <p>
                  Breakpoints are defined by Sass object <code className="text-primary font-consolas">$breakpoints</code>, which can be overwritten and/or added to.<br />
                  By default the built-in breakpoints are:
                </p>
                <SyntaxHighlighter language="sass" style={dracula}>
                    {sass_breakpoints}
                </SyntaxHighlighter>
            </div>
        </main>
    </div>
  )
}
import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../../components/sidebar'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {dracula} from 'react-syntax-highlighter/dist/cjs/styles/prism'

const variable_bg_colors = `<div className="bg-primary">Primary</div>
<div className="bg-secondary">Secondary</div>
<div className="bg-error">Error</div>
<div className="bg-info">Info</div>`;

const variable_text_colors = `<div className="text-primary">Primary</div>
<div className="text-secondary">Secondary</div>
<div className="text-error">Error</div>
<div className="text-info">Info</div>`;

const bg_colors = `<div className="bg-blue">Blue</div>
<div className="bg-red">Red</div>
<div className="bg-yellow">Yellow</div>
<div className="bg-green">Green</div>
<div className="bg-orange">Orange</div>
<div className="bg-green">Green</div>
<div className="bg-purple">Purple</div>
<div className="bg-gray">Gray</div>
<div className="bg-black">Black</div>
<div className="bg-white">White</div>`;

const text_colors = `<div className="text-blue">Blue</div>
<div className="text-red">Red</div>
<div className="text-yellow">Yellow</div>
<div className="text-green">Green</div>
<div className="text-orange">Orange</div>
<div className="text-green">Green</div>
<div className="text-purple">Purple</div>
<div className="text-gray">Gray</div>
<div className="text-black">Black</div>
<div className="text-white">White</div>`;

export default function Colors() {
  return (
    <div className="container mt-3">
      <Head>
        <title>Color Simple | Simply-UI</title>
        <meta name="description" content="Get a Simply simply CSS library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main className="row justify-center flex-nowrap">
            <Sidebar />
            <div className="ml-2 col-12-xs col-10-md col-10-lg">
                <h1>Colors</h1>
                <p>
                    Simply-UI uses Sass to make an object for all built-in color variables called <code className="text-primary font-consolas">$colors</code>. <br />
                    Any color specified in <code className="text-primary font-consolas">$colors</code> will be used to create any color-based style;<br />
                    whether text, background or toast color, a class will be made for that any color in <code className="text-primary font-consolas">$colors</code>.
                </p>
                <h2 className="mt-2">Color Variables</h2>
                <p>
                    There are a few built-in color variables, namely the following:
                </p>
                <div className="row flex-gap-2">
                    <div className="bg-primary text-white pl-1 col-6-sm col-3-md col-2-lg">Primary</div>
                    <div className="bg-secondary pl-1 col-6-sm col-3-md col-2-lg">Secondary</div>
                    <div className="bg-error pl-1 col-6-sm col-3-md col-2-lg">Error</div>
                    <div className="bg-info pl-1 col-6-sm col-3-md col-2-lg">Info</div>
                </div>
                <SyntaxHighlighter language="html" style={dracula}>
                    {variable_text_colors}
                </SyntaxHighlighter>

                <h2 className="mt-2">Built-in colors</h2>
                <p>
                    Simply-UI has a bunch of colors that come built-in! <br />
                    The colors that come built-in are:    
                </p>
                <div className="row flex-gap-2">
                    <div className="bg-blue text-white pl-1 col-6-sm col-3-md col-2-lg">Blue</div>
                    <div className="bg-red pl-1 col-6-sm col-3-md col-2-lg">Red</div>
                    <div className="bg-yellow pl-1 col-6-sm col-3-md col-2-lg">Yellow</div>
                    <div className="bg-green pl-1 col-6-sm col-3-md col-2-lg">Green</div>
                    <div className="bg-orange pl-1 col-6-sm col-3-md col-2-lg">Orange</div>
                    <div className="bg-green pl-1 col-6-sm col-3-md col-2-lg">Green</div>
                    <div className="bg-purple pl-1 col-6-sm col-3-md col-2-lg">Purple</div>
                    <div className="bg-gray pl-1 col-6-sm col-3-md col-2-lg">Gray</div>
                    <div className="bg-black text-white pl-1 col-6-sm col-3-md col-2-lg">Black</div>
                    <div className="bg-white pl-1 col-6-sm col-3-md col-2-lg">White</div>
                </div>
                <SyntaxHighlighter language="html" style={dracula}>
                    {bg_colors}
                </SyntaxHighlighter>

                <h2 className="mt-2">Text colors</h2>
                <p>Text colors use any of the colors defined in <code className="text-primary font-consolas">$colors</code>.</p>
                <h3>Usage</h3>
                <SyntaxHighlighter language="html" style={dracula}>
                    {`<!-- Variable Colors -->
${variable_text_colors}
<!-- Built-in Colors -->
${text_colors}` }
                </SyntaxHighlighter>

                <h2 className="mt-2">Background colors</h2>
                <p>Background colors use any of the colors defined in <code className="text-primary font-consolas">$colors</code>.</p>
                <h3>Usage</h3>
                <SyntaxHighlighter language="html" style={dracula}>
                    {`<!-- Variable Colors -->
${variable_bg_colors}
<!-- Built-in Colors -->
${bg_colors}` }
                </SyntaxHighlighter>
            </div>
        </main>
    </div>
  )
}
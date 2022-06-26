import Head from 'next/head'
import Image from 'next/image'
import CopyToClipboard from 'react-copy-to-clipboard';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {dracula} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import Sidebar from '../../components/sidebar'


const cdnText = `<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/simply-ui@1.1.6/dist/css/simply.min.css" />
	<title>Simply-UI Demo</title>
</head>
`;

const cloneText = `<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="dist/css/simply.css">
    <title>Simply-UI Demo</title>
</head>
`;

const npmText = `import 'simply-ui/dist/css/simply.min.css'`;

export default function Getting_Started() {
  return (
    <div className="container mt-3">
      <Head>
        <title>Get Simple | Simply-UI</title>
        <meta name="description" content="Get a Simply simply CSS library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main className="row justify-center flex-nowrap">
            <Sidebar />
            <div className="ml-2 col-12-xs col-10-md col-10-lg">
                <h1>Getting Started</h1>
                <h2>Get Setup</h2>
                <h3>CDN</h3>
                <p><code className="text-primary font-consolas">&lt;link&gt;</code> the CDN,
                    in your project&apos;s <code className="text-primary font-consolas">&lt;head&gt;</code>
                </p>
                <strong>JsDeliver:</strong>
                <ol>
                    <li>Full <span className="badge-secondary text-white">87.3 KB</span><br />
                    <a href="http://cdn.jsdelivr.net/npm/simply-ui@1.1.6/dist/css/simply.css" className="text-secondary">https://cdn.jsdelivr.net/npm/simply-ui@1.1.6/dist/css/simply.css</a>
                    </li>
                    <li>Min <span className="badge-secondary text-white">70.1 KB</span><br /><a href="http://cdn.jsdelivr.net/npm/simply-ui@1.1.6/dist/css/simply.min.css" className="text-secondary">https://cdn.jsdelivr.net/npm/simply-ui@1.1.6/dist/css/simply.min.css</a>
                    </li>
                </ol>

                <strong>UNPKG:</strong>
                <ol>
                    <li>Full <span className="badge-secondary text-white">87.3 KB</span><br /><a href="http://cdn.jsdelivr.net/npm/simply-ui@1.1.6/dist/css/simply.css"
                            className="text-secondary">https://cdn.jsdelivr.net/npm/simply-ui@1.1.6/dist/css/simply.css</a>
                    </li>
                    <li>Min <span className="badge-secondary text-white">70.1 KB</span><br /><a href="http://cdn.jsdelivr.net/npm/simply-ui@1.1.6/dist/css/simply.min.css"
                            className="text-secondary">https://cdn.jsdelivr.net/npm/simply-ui@1.1.6/dist/css/simply.min.css</a>
                    </li>
                </ol>

				<div>
					<SyntaxHighlighter language="html" style={dracula}>
						{cdnText}
					</SyntaxHighlighter>
				</div>

                <h3 className="mt-2">NPM</h3>
                <ol>
                    <li>
                        <p>In your project directory. Open Terminal and run <code className="text-primary font-consolas">npm i simply-ui</code>.</p>
                    </li>
                    <li>
                        Add a link to <code className="text-primary font-consolas">simply-ui/dist/css/simply.css</code> OR <code className="text-primary font-consolas">simply-ui/dist/css/simply.min.css</code> in your project.
                    </li>
                </ol>
                <SyntaxHighlighter language="javascript" style={dracula}>
                    {npmText}
                </SyntaxHighlighter>
                <sup>In the case of NextJS/REACT, the above is in _app.js</sup>

                <h3 className="mt-2">Clone</h3>
                <ol>
                    <li>
                        <p>Download or Clone the <a href="https://github.com/benjamin-Keller/Simply-UI"className="text-secondary">GitHub Repo</a>
                            and move the <a href="https://github.com/benjamin-Keller/Simply-UI/tree/master/simply-ui" className="text-secondary">Simply-UI</a> and
                            <a href="https://github.com/benjamin-Keller/Simply-UI/blob/master/gulpfile.js" className="text-secondary">gulpfile.js</a>
                            folder to your project
                                <br />(CDN and NPM comingsoon)
                        </p>
                    </li>
                    <li>
                        <p>In your project directory. Open Terminal and run <code
                                className="text-primary font-consolas">gulp</code> to build .css file.
                            <br /><strong>If you use simply.purged.css the file will only have used classes thanks to <a
                                    href="https://purgecss.com/plugins/gulp.html"
                                    className="text-secondary">gulp-purgecss</a>.</strong>
                        </p>
                    </li>
                    <li>
                        <p><code className="text-primary font-consolas">&lt;link&gt;</code> the built css, by default <code
                                className="text-primary font-consolas">dist/css/simply.html</code>,
                            in your project&apos;s <code className="text-primary font-consolas">&lt;head&gt;</code>
                        </p>

                    </li>
                </ol>
                <div>
                    <SyntaxHighlighter language="html" style={dracula}>
                        {cloneText}
                    </SyntaxHighlighter>
                </div>
            </div>
        </main>
    </div>
  )
}

import Link from 'next/link'
import { useRouter } from 'next/router'

export default function SideBar() {
	const router = useRouter();

    return (
    <>
        <div className="col-12-xs col-2-md col-2-lg overflow-y-scroll scrollbar-secondary">
            <div className="w-100">
                <div className="display-f flex-direction-column pb-2">
                    <h4 className="text-secondary">Introduction</h4>
                    <Link href="/docs/introduction/getting_started" passHref>
                        <a className={router.pathname == "/docs/introduction/getting_started" ? "text-secondary text-hover-secondary" : "text-hover-secondary"}>Getting Started</a>
                    </Link>
                </div>
                <div className="display-f flex-direction-column pb-2">
                    <h4 className="text-secondary">Layout</h4>
                    <Link href="/docs/layout/breakpoints" passHref>
                        <a className={router.pathname == "/docs/layout/breakpoints" ? "text-secondary text-hover-secondary" : "text-hover-secondary"}>Breakpoints <span className="badge-secondary text-white">WIP</span></a>
                    </Link>
                    <Link href="/docs/layout/grid" passHref>
                        <a className={router.pathname == "/docs/layout/grid" ? "text-secondary text-hover-secondary" : "text-hover-secondary"}>Grid <span className="badge-secondary text-white">WIP</span></a>
                    </Link>
                </div>
                <div className="display-f flex-direction-column pb-2">
                    <h4 className="text-secondary">Content</h4>
                    <Link href="/docs/content/colors" passHref>
                        <a className={router.pathname == "/docs/content/colors" ? "text-secondary text-hover-secondary" : "text-hover-secondary"}>Colors</a>
                    </Link>
                    <Link href="/docs/content/typography" passHref>
                        <a className={router.pathname == "/docs/content/typography" ? "text-secondary text-hover-secondary" : "text-hover-secondary"}>Typography</a>
                    </Link>
                </div>
                <div className="display-f flex-direction-column pb-2">
                    <h4 className="text-secondary">Forms</h4>
                    <Link href="/docs/forms/buttons" passHref>
                        <a className={router.pathname == "/docs/forms/input_fields" ? "text-secondary text-hover-secondary" : "text-hover-secondary"}>Buttons <span className="badge-secondary text-white">WIP</span></a>
                    </Link>
                    <Link href="/docs/forms/floating_label" passHref>
                        <a className={router.pathname == "/docs/forms/input_fields" ? "text-secondary text-hover-secondary" : "text-hover-secondary"}>Floating Label <span className="badge-secondary text-white">WIP</span></a>
                    </Link>
                    <Link href="/docs/forms/input_fields" passHref>
                        <a className={router.pathname == "/docs/forms/input_fields" ? "text-secondary text-hover-secondary" : "text-hover-secondary"}>Input Fields <span className="badge-secondary text-white">WIP</span></a>
                    </Link>
                </div>
                <div className="display-f flex-direction-column pb-2">
                    <h4 className="text-secondary">Components</h4>
                    <Link href="/docs/components/badges" passHref>
                        <a className={router.pathname == "/docs/components/badges" ? "text-secondary text-hover-secondary" : "text-hover-secondary"}>Badges <span className="badge-secondary text-white">WIP</span></a>
                    </Link>
                    <Link href="/docs/components/cards" passHref>
                        <a className={router.pathname == "/docs/components/cards" ? "text-secondary text-hover-secondary" : "text-hover-secondary"}>Cards <span className="badge-secondary text-white">WIP</span></a>
                    </Link>
                    <Link href="/docs/components/navbar" passHref>
                        <a className={router.pathname == "/docs/components/navbar" ? "text-secondary text-hover-secondary" : "text-hover-secondary"}>Navbar <span className="badge-secondary text-white">WIP</span></a>
                    </Link>
                    <Link href="/docs/components/toasts" passHref>
                        <a className={router.pathname == "/docs/components/toasts" ? "text-secondary text-hover-secondary" : "text-hover-secondary"}>Toasts <span className="badge-secondary text-white">WIP</span></a>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}
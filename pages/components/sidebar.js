import Link from 'next/link'
import { useRouter } from 'next/router'

export default function SideBar() {
	const router = useRouter();

    return (
    <>
        <div className="col-12-xs col-2-md col-2-lg overflow-y-scroll scrollbar-secondary">
            <div className="w-100">
                <div className="display-f flex-direction-column pb-2">
                    <h4>Introduction</h4>
                    <Link href="/docs/introduction/getting_started" passHref>
                        <a className={router.pathname == "/docs/introduction/getting_started" ? "text-secondary text-hover-secondary" : "text-hover-secondary"}>Getting Started <span className="badge-secondary text-white">New</span></a>
                    </Link>
                </div>
                <div className="display-f flex-direction-column pb-2">
                    <h4>Layout</h4>
                    <Link href="/docs/layout/breakpoints" passHref>
                        <a className={router.pathname == "/docs/layout/breakpoints" ? "text-secondary text-hover-secondary" : "text-hover-secondary"}>Breakpoints <span className="badge-secondary text-white ml-1">WIP</span></a>
                    </Link>
                    <Link href="/docs/layout/grid" passHref>
                        <a className={router.pathname == "/docs/layout/grid" ? "text-secondary text-hover-secondary" : "text-hover-secondary"}>Grid <span className="badge-secondary text-white ml-1">WIP</span></a>
                    </Link>
                </div>
                <div className="display-f flex-direction-column">
                    <h4>Forms</h4>
                    <Link href="/docs/forms/input_fields" passHref>
                        <a className={router.pathname == "/docs/forms/input_fields" ? "text-secondary text-hover-secondary" : "text-hover-secondary"}>Input Fields <span className="badge-secondary text-white ml-1">WIP</span></a>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}
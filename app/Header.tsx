import { Bars3Icon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import NavLinks from './NavLinks'

const Header = () => {
    return (
        <header>
            <div className="grid grid-cols-3 p-10 items-centerr">
                <Bars3Icon className="h-8 w-8 cursor-pointer" />
                <Link href="/" prefetch={false}>
                    <h1 className='font-serif text-4xl text-center'>
                        The{" "} 
                        <span className='underline decoration-6 decoration-red-600'>Daily</span>
                       {" "}News
                    </h1>
                </Link>
                <div className='flex items-center justify-end space-x-2'>
                    {/* DarkModeButton */}

                    <button className='hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800'>
                        Subscribe Now
                    </button>
                </div>

                <NavLinks />
                {/* SearchBox */}
            </div>
        </header>
    )
}

export default Header

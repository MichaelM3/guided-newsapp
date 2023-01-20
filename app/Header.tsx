import { Bars3Icon } from '@heroicons/react/24/solid'

const Header = () => {
  return (
    <header>
        <div className="grid grid-cols-3 p-10 items-centerr">
            <Bars3Icon className="h-8 w-8 cursor-pointer" />
        </div>
    </header>
  )
}

export default Header

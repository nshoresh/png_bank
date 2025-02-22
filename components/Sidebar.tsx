'use client'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
//import { Link } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Footer from './Footer'
import PlaidLink from './PlaidLink'

const Sidebar = ({user}:
    SiderbarProps) => {
      const pathname = usePathname();
  //const pathname = usePathname();

  return (
    <section className="sidebar">
        <nav className="flex
        flex-col gap-4">
            <Link href="/"
            className="mb-12
            cursor-pointer flex items-center gap-2">
              <Image 
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="Horizon logo"
              className="size-[24px] max-xl:size-14"
              />
              <h1 className="sidebar-logo">
                Horizone</h1>
            </Link>

            {sidebarLinks.map((item) => {
              const isActive = 
              pathname === item.
              route || pathname.startsWith('${item.route}/')

              return (
                <div key={item.label}>
                  <Link href={item.
                    route} //key={item.label}
                    className={cn('sidebar-link', {
                      'bg-bank-gradient': isActive
                    })}
                    >
                    <div className="relative size-6">
                      <Image
                      src={item.imgURL}
                      alt={item.label}
                      fill
                      />
                    </div>
                    <p className={cn("sidebar-label", {"!text-white":
                      isActive})}>
                      {item.label}
                    </p>
                  </Link>
                </div>
              )
            })}
          <PlaidLink user = { user }/>
            USER
        </nav>
        <Footer user={user} />
    </section>
  )
}

export default Sidebar

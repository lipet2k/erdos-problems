import Image from 'next/image';
import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ArrowPathIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const navigation = [
    { name: "Home", href: '/' },
    { name: "Tags", href: '/tags' },
    { name: "Prizes", href: '/prizes' },
    { name: "More", href: '/more' }
];

const more = [
    { name: 'FAQ', href: '/faq' },
    { name: 'Problem Lists', href: '/problems' },
    { name: "Definitions", href: '/definitions' },
    { name: "Links", href: '/links'},
    { name: "How to Help", href: '/help'}
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className='erdos-blue'>
            <nav className="mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
                <Link href='/' className='-m-1.5 p-1.5'>
                    <Image className="h-[3rem] w-auto" src="/logo.png" alt="Logo" width={100} height={100} />
                </Link>
                <div className='flex lg:hidden'>
                    <button
                        type='button'
                        className='-m-2.5 inline-flex items-center justify-center rounded-md p-2 text-white hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                        onClick={() => setMobileMenuOpen(true)}>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className='hidden lg:flex space-x-6'>
                    {navigation.map((item)=> (
                        <Link key={item.name} href={item.href} className='text-base font-medium text-white hover:underline'>
                            {item.name}
                        </Link>
                    ))}
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto erdos-blue px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <Image
                                className="h-8 w-auto"
                                src="/logo.png"
                                alt="logo"
                                height={500}
                                width={500}
                            />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:underline"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
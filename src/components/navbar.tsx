import { Button } from '@/components/ui/button';
import {
  SheetTrigger,
  SheetContent,
  Sheet,
  SheetClose,
} from '@/components/ui/sheet';
import Link from 'next/link';
import { ModeToggle } from './modeToggle';

export default function Navbar() {
  const scrollToSection = (target: string) => {
    if (target === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex h-16 w-full shrink-0 items-center justify-end px-4 md:px-6 bg-white shadow-md dark:bg-inherit dark:outline outline-1 outline-gray-300">
      <ModeToggle></ModeToggle>
      <div className='ml-auto'>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="grid gap-2 py-6">
              <SheetClose asChild>
                <button
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  onClick={() => scrollToSection('home')}
                >
                  Home
                </button>
              </SheetClose>
              <SheetClose asChild>
                <button
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  onClick={() => scrollToSection('about')}
                >
                  About Me
                </button>
              </SheetClose>
              <SheetClose asChild>
                <button
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  onClick={() => scrollToSection('projects')}
                >
                  Projects
                </button>
              </SheetClose>
              <SheetClose asChild>
                <button
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  onClick={() => scrollToSection('work')}
                >
                  Experience
                </button>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  className="flex w-full items-center py-2 text-lg font-semibold text-zinc-800"
                  href="mailto:adrianhossen5@gmail.com"
                >
                  Contact
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  className="flex w-full items-center py-2 text-lg font-semibold text-zinc-800"
                  href="/resume.pdf"
                >
                  Resume
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <nav className="ml-auto hidden lg:flex gap-6">
        <button
          className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          onClick={() => scrollToSection('home')}
        >
          Home
        </button>
        <button
          className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          onClick={() => scrollToSection('about')}
        >
          About Me
        </button>
        <button
          className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          onClick={() => scrollToSection('work')}
        >
          Experience
        </button>
        <button
          className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          onClick={() => scrollToSection('projects')}
        >
          Projects
        </button>
      </nav>
    </div>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

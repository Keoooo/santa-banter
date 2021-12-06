/* This example requires Tailwind CSS v2.0+ */
import { useState, useContext, Fragment, Children } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import LogOutBtn from "../UI/Buttons/LogoutBtn";
import LogInBtn from "../UI/Buttons/LogInBtn";
import { useAuth } from "../../utils/useAuth";
import Footer from "./Footer";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Post", href: "/posts" },
];
//gitinitdewfewfew
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MainLayout({ children }) {
  const [isSelected, setIsSelected] = useState(navigation[0].name);

  const { user: authUser } = useAuth();
  console.log(authUser);

  const router = useRouter();

  const handleMenuItemClick = (name) => {
    setIsSelected(name);
  };
  return (
    <>
      <div className="min-h-full">
        <Disclosure
          as="nav"
          className="bg-santaGreen dark:bg-primaryDark border-b sticky dark:white border-santaGreen"
        >
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center">
                      <img src="" />
                    </div>

                    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                      {navigation.map((item) => (
                        <Link href={item.href}>
                          <a
                            key={item.name}
                            onClick={() => handleMenuItemClick(item.href)}
                            className={classNames(
                              router.pathname === item.href
                                ? "border-santaRed text-2xl font-bold tracking-widest text-white font-christmasFont "
                                : "border-transparent text-2xl font-bold tracking-widest text-christmasGold font-christmasFont hover:border-white hover:text-white",
                              "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                            )}
                            aria-current={
                              router.pathname === item.href ? "page" : undefined
                            }
                          >
                            {item.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    <div className="sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                      {/* Profile dropdown */}
                      {!authUser ? <LogInBtn /> : <LogOutBtn />}
                    </div>

                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative">
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      ></Transition>
                    </Menu>
                  </div>

                  <div className="-mr-2 flex items-center  sm:hidden">
                    {/* Mobile menu button */}
                    {/* Profile dropdown */}
                    <h1 className="font-christmasFont mr-16 text-christmasGold tracking-widest text-3xl ">
                      Santa Banter
                    </h1>
                    {!authUser ? <LogInBtn /> : <LogOutBtn />}

                    <Disclosure.Button className="bg-christmasGold dark:bg-primaryDark inline-flex items-center justify-center p-2 rounded-md text-santaGreen hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-santaGreen dark:focus:ring-yellow-400">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      className={classNames(
                        router.pathname === item.href
                          ? "bg-christmasGold dark:bg-secondaryDark dark:border-yellow-400 border-santaGreen dark:text-white text-santaGreen w-full"
                          : "border-transparent w-full dark:text-yellow-400 text-gray-50 dark:hover:bg-secondaryDark hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
                        "block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                      )}
                    >
                      <Link href={item.href}>
                        <a>{item.name}</a>
                      </Link>
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div>
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

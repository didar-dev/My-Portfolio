"use client";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
const navigation = [
  { name: "About", href: "about", current: false },
  { name: "Projects", href: "projects", current: false },
  { name: "Contact", href: "contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-[#111111] w-full">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-white ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <p className="text-2xl font-semibold text-gray-300 cursor-pointer tracking-widest">
                    DiDAR.DEV
                  </p>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        className={classNames(
                          "text-gray-300  hover:text-white cursor-pointer",
                          "block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                        )}
                        aria-current={item.current ? "page" : undefined}
                        onClick={() => {
                          document
                            .getElementById(item.href)
                            .scrollIntoView({ behavior: "smooth" });
                        }}
                        href={`#${item.href}`}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <motion.div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.href}`}
                  onClick={() => {
                    document
                      .getElementById(item.href)
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  className={classNames(
                    "text-gray-300  hover:text-white cursor-pointer",
                    "block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                  )}
                  name={item.name}
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

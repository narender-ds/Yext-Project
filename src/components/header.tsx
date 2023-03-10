import { Link } from "@yext/pages/components";
import * as React from "react";
const Header=()=> {
  return (
    <>
      <div style={{ backgroundColor: "#1e293b" }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="#">
                <span className="sr-only">Your Company</span>
                <img
                    className="h-8 w-auto"
                    src="https://i.pinimg.com/564x/82/1a/a8/821aa80c546ac7d554e4ac0de0e95cb8.jpg"
                    alt="Your Company"
                  />
              </Link>
            </div>

            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              <a
                href="#"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Sign in
              </a>
              <a
                href="#"
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                {/* <div>
                  <img
                    className="h-8 w-auto"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoi8UnYRExA_2rviJQ_mht9AW7hpH2PgdE8A&usqp=CAU"
                    alt="Your Company"
                  />
                </div> */}
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8"></nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;

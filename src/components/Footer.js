import React from 'react'

const Footer = () => {
    const time = new Date().getFullYear()
  return (
    <footer className="bottom-0 left-0 z-20 p-4 w-full bg-slate-700 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <div className="mx-auto max-w-7xl py-1 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-4">
        <div className="mt-4 md:order-1 md:mt-0">
          <p className="text-center text-base text-white">&copy; {time} Keeper App, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
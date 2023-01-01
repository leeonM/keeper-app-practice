import React from "react";

const Header = () => {
  return (
    <header className="bg-slate-700">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b bg-slate-700 py-6 lg:border-none">
          <div className="flex items-center">
              <h1 className="text-white font-sans font-semibold text-2xl">Keeper App</h1>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
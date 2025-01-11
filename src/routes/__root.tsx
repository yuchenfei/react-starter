import React from 'react'

import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

const TanStackRouterDevtools =
  import.meta.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        }))
      )

export const Route = createRootRoute({
  component: () => (
    <>
      <div className='flex h-dvh w-dvw flex-col'>
        <div className='flex gap-2 p-2'>
          <Link className='[&.active]:font-bold' to='/'>
            Home
          </Link>
          <Link className='[&.active]:font-bold' to='/about'>
            About
          </Link>
        </div>
        <hr />
        <div className='grow'>
          <Outlet />
        </div>
      </div>
      <TanStackRouterDevtools />
    </>
  ),
})

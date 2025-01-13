import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import Button from '../button'

describe('Button', () => {
  it('renders button with default props', () => {
    render(<Button>Default Button</Button>)
    const button = screen.getByText('Default Button')

    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-blue-500') // primary variant
    expect(button).toHaveClass('px-3 py-2 text-sm') // medium size
  })

  it('renders button with secondary variant', () => {
    render(<Button variant='secondary'>Secondary</Button>)
    const button = screen.getByText('Secondary')

    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-gray-500')
  })

  it('renders button with different sizes', () => {
    const { rerender } = render(<Button size='sm'>Small</Button>)
    let button = screen.getByText('Small')
    expect(button).toHaveClass('px-2.5 py-1.5 text-xs')

    rerender(<Button size='lg'>Large</Button>)
    button = screen.getByText('Large')
    expect(button).toHaveClass('px-4 py-2 text-base')
  })

  it('handles click events', async () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click Button</Button>)

    await userEvent.click(screen.getByText('Click Button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})

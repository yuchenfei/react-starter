import '@testing-library/jest-dom/vitest'
import { beforeEach, vi } from 'vitest'

beforeEach(() => {
  const ResizeObserverMock = vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }))

  vi.stubGlobal('ResizeObserver', ResizeObserverMock)
})

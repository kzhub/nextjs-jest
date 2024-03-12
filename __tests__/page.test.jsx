import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
// import Page from '../app/page'
import Page from '../components/page' 

describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })
})
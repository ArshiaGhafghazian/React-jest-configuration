import { render, screen } from "@testing-library/react"
import App from "./App"

test("it sholud render", () => {
    render(<App />)
    expect(screen.getByRole("heading")).toBeInTheDocument()
   
})



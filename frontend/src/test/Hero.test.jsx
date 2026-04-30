
import {render, screen} from "@testing-library/react"
// import "@testing-library/dom"
import "@testing-library/jest-dom"
import Hero from "../landing_page/home/Hero.jsx"
import {describe, expect, test} from "vitest"

describe('Hero component', ()=>{
    test('renders hero image', ()=>{
        render(<Hero/>)
        const heroImg = screen.getAllByAltText("Hero Image")
        expect(heroImg).toBeInTheDocument();
        expect(heroImg).toHaveAttribute('src',"media/images/homeHero.png")
    })
})
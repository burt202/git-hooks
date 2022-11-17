import * as React from "react"
import * as renderer from "react-test-renderer"

import App from "./app"

describe("App", () => {
  it("renders correctly", () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON() as renderer.ReactTestRendererJSON
    const children = tree.children as renderer.ReactTestRendererNode[]

    expect(children[0]).toBe("Hello World")
  })
})

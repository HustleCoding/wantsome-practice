const rewire = require("rewire")
const script = rewire("./script")
const reducer = script.__get__("reducer")

// @ponicode
describe("reducer", () => {
    test("0", () => {
        let callFunction = () => {
            reducer("Jean-Philippe", "da7588892")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            reducer(0, -1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            reducer("Edmond", "bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            reducer("George", -10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            reducer("Pierre Edouard", "bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            reducer(-Infinity, -Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

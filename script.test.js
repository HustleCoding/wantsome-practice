const rewire = require("rewire")
const script = rewire("./script")
const celsiusToFahrenheit = script.__get__("celsiusToFahrenheit")
const reducer = script.__get__("reducer")
const calcIncomeForFirst = script.__get__("calcIncomeForFirst")
// @ponicode
describe("celsiusToFahrenheit", () => {
    test("0", () => {
        let result = celsiusToFahrenheit(10)
        expect(result).toBe(50)
    })
})

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

// @ponicode
describe("calcIncomeForFirst", () => {
    test("0", () => {
        let callFunction = () => {
            calcIncomeForFirst("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            calcIncomeForFirst(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

import * as product_detail_component from "./product-detail.component"
// @ponicode
describe("clear", () => {
    let inst: any

    beforeEach(() => {
        inst = new product_detail_component.ProductDetailComponent()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.clear()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("saveProduct", () => {
    let inst: any

    beforeEach(() => {
        inst = new product_detail_component.ProductDetailComponent()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.saveProduct()
        }
    
        expect(callFunction).not.toThrow()
    })
})

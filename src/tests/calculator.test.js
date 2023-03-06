import Calculator from "../components/Calculator"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"


describe("Teste do componente calculator", () => {

    //1-Em ao menos um teste a aplicação é renderizada corretamente com os dígitos +, -, *, e /.
    test("Deve renderizar dígitos da aplicação", () => {
        render(<Calculator />)

        const digitos = screen.getByText("+", "-", "*", "/")
        expect(digitos).toBeInTheDocument()
        screen.logTestingPlaygroundURL()
    })

    //2 Em ao menos dois testes a multiplicação está funcionando corretamente. Por exemplo:
    //- ao clicar nos dígitos para realizar o cálculo 5 * 2 e clicar em =, deve aparecer no resultado o valor 10.
    test("Multiplicação deve funcionar corretamente", async () => {
        const user = userEvent.setup()
        render(<Calculator />)

        const cliqe5 = screen.getByText("5")
        const cliqeM = screen.getByText("*")
        const cliqe2 = screen.getByText("2")
        const cliqeI = screen.getByText("=")


        await user.click(cliqe5)
        await user.click(cliqeM)
        await user.click(cliqe2)
        await user.click(cliqeI)

        const value = screen.getByText(/10/i)
        expect(value).toBeInTheDocument()
        screen.logTestingPlaygroundURL()


    })
    test("Soma deve funcionar corretamente", async () => {
        const user = userEvent.setup()
        render(<Calculator />)

        const cliqe5 = screen.getByText("9")
        const cliqeM = screen.getByText("+")
        const cliqe2 = screen.getByText("5")
        const cliqeI = screen.getByText("=")


        await user.click(cliqe5)
        await user.click(cliqeM)
        await user.click(cliqe2)
        await user.click(cliqeI)

        const value = screen.getByText(/14/i)
        expect(value).toBeInTheDocument()
    })

    // //3-Garanta em pelo menos um teste que concatenar operações está funcionando corretamente. Por exemplo:
    // // 5 * 2 + 10 deve ser 20 e não 25

    test("Deve concatenar corretamente", async () => {
        const user = userEvent.setup()
        render(<Calculator />)

        const click5 = screen.getByText("5")
        const cliqeMult = screen.getByText("*")
        const click2 = screen.getByText("2")
        const clickSum = screen.getByText("+")
        const click1 = screen.getByText("1")
        const click0 = screen.getByRole('button', { name: "0" })
        const clickIqual = screen.getByText("=")

        await user.click(click5)
        await user.click(cliqeMult)
        await user.click(click2)
        await user.click(clickSum)
        await user.click(click1)
        await user.click(click0)
        await user.click(clickIqual)

        const value = screen.getByText(/20/i)
        expect(value).toBeInTheDocument()
        screen.logTestingPlaygroundURL()

    })
})
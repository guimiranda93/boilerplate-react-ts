/**
 *
 * This context provides a single product.
 * Build your own Context and implement as you want.
 * Don't forget to call the provider in App.tsx
 *
 * To use the contexts inside your views or components you have to call:
 * const myCtx = useContext(MyContext)
 * Don't forget to import the MyContext.
 *
 */

import { createContext, useState, ReactNode, FC } from 'react'

interface ProductProps {
  id?: string
  name?: string
}

interface ContextProps {
  product: ProductProps | null
  addProduct: (p: ProductProps) => void
}

const ExampleContext = createContext<ContextProps>({
  product: null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  addProduct: (_p: ProductProps) => {},
})

interface Props {
  children: ReactNode
}

export const ExampleProvider: FC<Props> = ({ children }) => {
  const [product, setProduct] = useState<ProductProps | null>(null)

  const addProduct = (p: ProductProps) => {
    setProduct(p)
  }

  return (
    <ExampleContext.Provider
      value={{
        product,
        addProduct,
      }}
    >
      {children}
    </ExampleContext.Provider>
  )
}

export default ExampleContext

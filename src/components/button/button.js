import tw, { styled } from "twin.macro" //highlight-line

const Button = styled.button`
  ${tw`bg-blue-500 hover:bg-blue-800 text-white p-2 rounded`}
`

export default Button
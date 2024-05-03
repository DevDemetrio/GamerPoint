import { Button } from "../ButtonMore/styled"

const ButttonLess = ({number, onClick}) =>{
  return(
    <Button onClick={onClick}>
      {number}
    </Button>
  )
}
export default ButttonLess
import { Button } from "./styled"

const ButttonMore = ({number, onClick}) =>{
  return(
    <Button onClick={onClick}>
      {number}
    </Button>
  )
}
export default ButttonMore
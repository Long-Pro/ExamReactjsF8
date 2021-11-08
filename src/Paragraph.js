import { ThemeContext } from "./ThemeContext"
import { useContext } from "react"
export default function Paragraph(){
  const themeContext=useContext(ThemeContext)
  return(
    <p className={themeContext.theme}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices id tellus sed porta. Donec sagittis porta tempus. Proin at leo eu tortor condimentum vehicula. Morbi leo magna, sollicitudin ac est non, ornare malesuada dui. Quisque sit amet quam ac diam vehicula mollis sit amet at justo. Morbi ut urna et tellus placerat imperdiet. Nulla lobortis vulputate consectetur. Suspendisse pulvinar varius ante, et convallis risus dignissim id. Vestibulum suscipit luctus nisl eu consequat. Duis pretium arcu ac lectus consequat, at aliquam urna dictum. Sed sed fermentum tortor, at consectetur magna. Cras a dapibus nisi. Suspendisse dapibus nisl vel metus finibus tempor.
    </p>
  )
}
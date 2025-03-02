import { AccordionTitle } from "./AccordionTittle"
import { AccordionBody } from "./AccordionBody"
export function Accordion(props) {
    return(
    <div>  
    <AccordionTitle title = {props.titleApp}/>
    <AccordionBody />
    </div>
    )
  }
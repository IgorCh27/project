import React from "react"
import { AccordionTitle } from "./AccordionTittle"
import { AccordionBody } from "./AccordionBody"

export function Accordion(props) {
  if(props.colapsed) {
    return(
      <div>  
      <AccordionTitle title = {props.titleApp}/>
      </div>
      )
  } else {
    return(
      <div>  
      <AccordionTitle title = {props.titleApp}/>
      <AccordionBody />
      </div>
      )
  }
  }
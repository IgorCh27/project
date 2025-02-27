 import {Star} from "./Star"

 export function Rating() {
    return(
      <div>
       <Star selected={true} />
       <Star selected={true}/>
       <Star selected={false}/>
       <Star selected={false}/>
       <Star selected={false}/>
      </div>
    )
  }
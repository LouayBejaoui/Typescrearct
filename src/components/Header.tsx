import {  type ReactNode } from "react"

type ImgType = {
    image: {
        src:string,
        alt : string
    }
    children : ReactNode
}


export default function Header({image  , children} :ImgType ){
return (
<div>
<img src={image.src} alt={image.alt} />
{children}
</div>
)
}
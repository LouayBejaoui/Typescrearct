import {type ReactNode} from 'react'

type InfoBoxType = {
    mode : 'hint' | 'warning',
    severity? : 'low' | "medium" | 'high'
    children: ReactNode
}

export default function InfoBox({mode ,severity, children} : InfoBoxType){

    if (mode=='hint') {
    return (
       
        <aside className='infobox infobox-hint'>
            <p>{children}</p>
        </aside>
    )}

    return (
       
        <aside className={`infobox infobox-warning warning--${severity}`}>
            <h2>Warning</h2>
            <p>{children}</p>
        </aside>
    )
}
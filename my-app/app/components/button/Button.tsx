'use client'

type ButtonProps = {
    title:string,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
}

export function Button ({onClick,title} : ButtonProps) {
    return(
        <>
            <button  type="button" className="clase-boton-bienestar" onClick={onClick} >{title}</button>
        </>
    )
}
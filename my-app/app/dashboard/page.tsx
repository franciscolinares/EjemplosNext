//indica en que lugar se hace el renderizado
'use client'
//importa los componentes o librerias a usar
import { useRouter } from 'next/navigation'
import { Button } from '../components/button/Button';
import { Menu } from '../components/menu/Menu';

export default () => {

    const router = useRouter();

    return(
        <>
            <Menu/>
            <hr></hr>
            <Button onClick={() => router.push('/settings')} title={'ir a settings'}></Button>
            <hr></hr>
            <hr></hr>
            <Button onClick={() => router.push('/posts')} title={'ir a posts'}></Button>
            <hr></hr>
            <button onClick={() => router.push('/')}>
                ir a la pagina principal
            </button>
        </>
    )
}


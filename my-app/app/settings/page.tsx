'use client'
 
import { useRouter } from 'next/navigation'
 
export default function Page() {
  const router = useRouter()
 
  return (
    <>
        <h2>soy los settings</h2>
        <button type="button" onClick={() => router.push('/dashboard')}>
            ir al Dashboard
        </button>
    </>
    
  )
}


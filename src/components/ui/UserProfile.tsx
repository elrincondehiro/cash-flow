'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { User } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'

interface UserProfileProps{
  user: User | null,
  data: any | null,
}


export default function UserProfile({user, data}: UserProfileProps) {
  const router = useRouter()
  const supabase = createClient()

  async function handleChange(e: any) {
    const res = await supabase.from('profile').update({is_admin:e.target.checked}).eq('id', user?.id)
    console.log(res)
    router.refresh()
  }
  return (
    
      <div className="card">
        <div className="text-3xl mb-4">{user?.email}</div>
        <div className="text-xl mb-4">
          {data[0].is_admin ? 'Administrador' : 'Usuario'}
        </div>
        <div className="text-xl mb-4">
          {data[0].is_admin ? 'Si' : 'No'}
        </div>
        <div className="text-xl mb-4">
          {data[0].is_admin ? 'Si' : 'No'}
        </div>
        <input type="checkbox" className="mr-2" checked={data[0].is_admin} onChange={handleChange} />
        {/* ... resto del contenido ... */} 
      </div>
  )
}  
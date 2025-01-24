import UserProfile from '@/components/ui/UserProfile'
import { createClient } from '@/lib/supabase/server'



export default async function Profile() {
  const supabase =   await createClient()
  const { data: { user }  } =  await supabase.auth.getUser()
  const {data, error} = await supabase.from('profile').select('*').eq('id', user?.id)
  console.log(data)
  
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Perfil
          </h1>
          {error? (<div>{error.message}</div>): (<UserProfile {...{user,data} } />)}
              
        </div>
      </main>
    </div>
    
  )

}
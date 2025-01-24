// src/app/dashboard/page.tsx
import { createClient } from '@/lib/supabase/server'
import DashboardCard from '@/components/ui/DashboardCard'
import { dashboardItems } from '@/types/constants'

export default async function Dashboard() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const {data} = await supabase.from('profile').select('*').eq('id', user?.id)
 
  
  
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Panel de Control
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboardItems.filter(item => data[0].is_admin || item.access === "user" ) .map((item) => { 
              return <DashboardCard key={item.route} {...item} />})}
          </div>
        </div>
      </main>
    </div>
  )

}

// import { createClient } from '@/lib/supabase/server'
// import SignOutButton from '@/components/ui/SignOutButton'
// import Link from 'next/link'

// export default async function Dashboard() {
//   const supabase = await createClient()
//   const { data: { user } } = await supabase.auth.getUser()

// return (
//   <div className="min-h-screen bg-gray-100 text-red-500">
//     <header className="bg-white shadow">
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex">
//             <div className="flex-shrink-0 flex items-center">
//              <Link href="/">
//               <h1 className="text-xl font-bold">Mi App</h1>
//               </Link>
//             </div>
//           </div>
//           <div className="flex items-center">
//             <SignOutButton />
//           </div>
//         </div>
//       </nav>    
//     </header>

//     <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//       <div className="px-4 py-6 sm:px-0">
//         <h2 className="text-2xl font-bold mb-4">
//           Bienvenido a Mi App
//         </h2>
//           {user ? (
//             <p>
//               Has iniciado sesión como: {user.email}
//             </p>
//           ) : (
//             <p>
//               Por favor inicia sesión para acceder a todas las funcionalidades
//             </p>
//           )}
//       </div>
//     </main>
//   </div>
// ) 
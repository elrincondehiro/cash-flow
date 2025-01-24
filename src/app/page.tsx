import { createClient } from '@/lib/supabase/server'
import { theme } from '@/styles/theme'

export default async function Home() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="card">
        <h1 className="text-4xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>
          Bienvenido a Mi App
        </h1>
        {user ? (
            <p>
              Has iniciado sesión como: {user.email}
            </p>
          ) : (
            <p>
              Por favor inicia sesión para acceder a todas las funcionalidades
            </p>
          )}
        {/* ... resto del contenido ... */}
      </div>
    </div>

    
  )
}
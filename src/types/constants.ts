
// export const routeTitles: { [key: string]: string } = {
//   'dashboard': 'Panel Principal',
//   'cierre-caja': 'Cierre de Caja',
//   'facturas': 'Facturas',
//   'clientes': 'Clientes',
//   'perfil': 'Perfil',
//   'configuracion': 'Configuración',
//   'estadisticas': 'Estadísticas',
// }

export type DashboardItem = {
    title: string,
    access: 'admin' | 'user',
    description: string,
    icon: string,
    route: string,
    color?: string,
}

export const dashboardItems : Array<DashboardItem> = [
    {
      title: 'Cierre de Caja',
      access: 'admin',
      description: 'Formulario para cerrar la caja',
      icon: '📊',
      route: '/dashboard/cash-closing',

    },
    {
      title: 'Clientes',
      access: 'admin',
      description: 'Gestión de clientes',
      icon: '👥',
      route: '/dashboard/clientes',
      color: 'purple'
    },
    {
      title: 'Facturas',
      access: 'admin',
      description: 'Gestion de facturas y pagos',
      icon: '📄',
      route: '/dashboard/facturas',
      color: 'red'
    },
    {
      title: 'Estadísticas',
      access: 'admin',
      description: 'Métricas y Estadisticas',
      icon: '📈',
      route: '/dashboard/estadisticas',
    },
    {
      title: 'Configuración',
      access: 'user',
      description: 'Ajustes de la cuenta y preferencias',
      icon: '⚙️',
      route: '/dashboard/configuracion',
      color: 'gray'
    },
    {
      title: 'Perfil',
      access: 'user',
      description: 'Acceso a tu Perfil',
      icon: '👤',
      route: '/dashboard/profile',
      color: 'gray'
    }
]

export const routeTitles: { [key: string]: string } = dashboardItems.reduce((acc, item) => {
    acc[item.route.split('/')[2]] = item.title
    return acc
}, {['dashboard']: 'Panel de control '})

export const hoverColors : {[key: string]: string} = {
  blue: 'hover:bg-blue-500/60',
  green: 'hover:bg-green-500/60',
  yellow: 'hover:bg-yellow-500/60',
  purple: 'hover:bg-purple-500/60',
  red: 'hover:bg-red-500/60',
  gray: 'hover:bg-gray-500/60',
  black: 'hover:bg-black-500/60',
  cyan : 'hover:bg-cyan-500/60',

}
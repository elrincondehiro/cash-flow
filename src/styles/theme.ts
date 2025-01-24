export const theme = {
  colors: {
    primary: {
      main: '#2563eb', // blue-600
      light: '#3b82f6', // blue-500
      dark: '#1d4ed8', // blue-700
    },
    secondary: {
      main: '#7c3aed', // violet-600
      light: '#8b5cf6', // violet-500
      dark: '#6d28d9', // violet-700
    },
    background: {
      main: '#f3f4f6', // gray-100
      paper: '#ffffff',
    },
    text: {
      primary: '#111827', // gray-900
      secondary: '#4b5563', // gray-600
      disabled: '#9ca3af', // gray-400
    },
    error: '#dc2626', // red-600
    success: '#16a34a', // green-600
    warning: '#d97706', // amber-600
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
  },
}

export type Theme = typeof theme;
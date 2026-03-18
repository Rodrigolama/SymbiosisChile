import { useEffect } from 'react';

export function useGclid() {
  useEffect(() => {
    // Capturar GCLID de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const gclid = urlParams.get('gclid');
    
    if (gclid) {
      // Guardar en localStorage
      localStorage.setItem('gclid', gclid);
      
      // Opcional: también guardar en cookie con expiración 90 días
      const date = new Date();
      date.setTime(date.getTime() + (90 * 24 * 60 * 60 * 1000));
      document.cookie = `gclid=${gclid}; expires=${date.toUTCString()}; path=/`;
    }
  }, []);
  
  // Función para obtener el GCLID guardado
  const getGclid = () => {
    return localStorage.getItem('gclid') || '';
  };
  
  return { getGclid };
}

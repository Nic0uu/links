/**
 * Link-in-bio Neobrutalista Minimalista
 * Manejo de eventos: Copiado al portapapeles y acordeon desplegable
 */

document.addEventListener('DOMContentLoaded', () => {
  const shareButton = document.getElementById('btn-share');
  const toast = document.getElementById('toast');
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  let toastTimer = null;

  /**
   * Muestra la alerta tipo Toast con el mensaje especificado
   */
  function showToast(message) {
    if (!toast) return;

    const messageEl = toast.querySelector('.toast-message');
    if (messageEl && message) {
      messageEl.textContent = message;
    }

    if (toastTimer) {
      clearTimeout(toastTimer);
    }

    toast.classList.add('show');

    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2200);
  }

  /**
   * Copia la URL actual al portapapeles con compatibilidad amplia
   */
  async function copyCurrentUrl() {
    const url = window.location.href;

    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(url);
        return true;
      } catch (err) {
        console.warn('Fallo navigator.clipboard, usando fallback:', err);
      }
    }

    // Metodo de respaldo con elemento de texto invisible
    try {
      const textarea = document.createElement('textarea');
      textarea.value = url;
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      textarea.style.top = '-9999px';
      textarea.setAttribute('readonly', '');
      document.body.appendChild(textarea);
      textarea.select();
      const copied = document.execCommand('copy');
      document.body.removeChild(textarea);
      return copied;
    } catch (err) {
      console.error('Error al copiar enlace:', err);
      return false;
    }
  }

  /**
   * Listener para el boton de compartir
   */
  if (shareButton) {
    shareButton.addEventListener('click', async () => {
      const ok = await copyCurrentUrl();
      if (ok) {
        showToast('Enlace copiado');
      } else {
        showToast('Error al copiar');
      }
    });
  }

  /**
   * Manejador del boton desplegable (acordeon)
   */
  if (dropdownToggle) {
    dropdownToggle.addEventListener('click', (e) => {
      e.preventDefault();
      const parentItem = dropdownToggle.closest('.has-dropdown');
      if (!parentItem) return;

      const isExpanded = parentItem.classList.toggle('open');
      dropdownToggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    });
  }
});

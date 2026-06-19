// ── Facebook Pixel ────────────────────────────────────────────────────────
// Set your Pixel ID here. Find it in Meta Business Suite → Events Manager.
export const FB_PIXEL_ID = '1265146225546338'

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void
    _fbq: unknown
  }
}

function track(event: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') return
  window.fbq('track', event, params)
}

export const FB = {
  pageView() {
    track('PageView')
  },
  viewContent(productName: string, productId: string) {
    track('ViewContent', {
      content_name: productName,
      content_ids: [productId],
      content_type: 'product',
    })
  },
  initiateCheckout(productName: string, value: number) {
    track('InitiateCheckout', {
      content_name: productName,
      value,
      currency: 'MAD',
      num_items: 1,
    })
  },
  purchase(productName: string, value: number) {
    track('Purchase', {
      content_name: productName,
      value,
      currency: 'MAD',
    })
  },
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://localhost:3000'

export const api = async <T>(url: string, config?: RequestInit): Promise<T> => {
  try {
    const req = await fetch(SITE_URL + '/api' + url, {
      headers: {
        'Content-Type': 'application/json',
        ...config?.headers,
      },
      ...config,
    })

    return await req.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}

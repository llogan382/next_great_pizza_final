export async function fetchProfile(profile: any): Promise<{ data: any }> {
  const response = await fetch('/api/profile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(profile),
  })
  const result = await response.json()

  return result
}

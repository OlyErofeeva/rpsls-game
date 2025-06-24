import type { Choice } from "../types"

const API_BASE_URL = 'http://localhost:3000'

export async function getChoices(): Promise<Choice[]> {
  const response = await fetch(`${API_BASE_URL}/choices`, { method: 'GET' })
  const choices = await response.json()
  return choices
}

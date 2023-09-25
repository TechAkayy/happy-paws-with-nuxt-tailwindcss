export const usePet = async (petId: number) => {
  // const { data, error } = await useFetch(`/api/adopt/external-data/${petId}`)
  const { data, error } = await useFetch(`/api/adopt/local-data/${petId}`)

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: `Couldn't fetch pet profile for id ${petId}.`,
    })
  }

  return data
}

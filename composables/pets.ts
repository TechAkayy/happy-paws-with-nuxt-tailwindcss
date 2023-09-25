export const usePets = async () => {
  // const { data, error } = await useFetch('/api/adopt/external-data')
  const { data, error } = await useFetch('/api/adopt/local-data')

  const { allPets, somePets } = data.value

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: `Couldn't fetch pet profiles.`,
    })
  }

  return { allPets, somePets }
}

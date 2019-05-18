export const findDroneLocation = async () => {
  const url = 'https://react-assessment-api.herokuapp.com/api/drone'
  const result = await fetch(url)
  const response = await result.json()
  return response.data
}

export async function fetchMasjids(latitude: number, longitude: number) {
  const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json];node(around:5000,${latitude},${longitude})[amenity=place_of_worship][religion=muslim];out;`;
  const response = await fetch(overpassUrl);
  const data = await response.json();
  return data.elements;
}

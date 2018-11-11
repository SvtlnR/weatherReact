
export function updateLocation(location) {
  return {
    type: "LOCATION_UPDATE",
    payload:{location:location}
  }
};
export function addFavorite(location) {
  return {
    type: "ADD_FAVORITE",
    payload:{location:location}
  }
};
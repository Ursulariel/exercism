//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const SECONDS_in_YEAR = 60 * 60 * 24 * 365.25;
const PLANET_to_EARTH_TIME_RATIO = {
  mercury: 0.2408467,
  venus:  0.61519726,
  earth: 1, //365.25 Earth days, or 31557600 seconds
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
}

export const age = (planet, planetAgeInSeconds) => {
  const planetTimeComparedToEarth = PLANET_to_EARTH_TIME_RATIO[planet];

  return Math.round(( planetAgeInSeconds / planetTimeComparedToEarth / SECONDS_in_YEAR )  * 100 ) / 100
};

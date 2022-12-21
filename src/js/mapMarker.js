function getRoomStatus(temperature, humidity) {
  if (temperature == null || humidity == null) return "offline";

  let temperatureStatus = getTemperatureStatus(temperature);
  let humidityStatus = getHumidityStatus(humidity);

  if (temperatureStatus === "Comfortable") temperatureStatus = "";
  if (humidityStatus === "Comfortable") humidityStatus = "";

  if (!temperatureStatus && !humidityStatus) return "Comfortable";

  return `${temperatureStatus}${humidityStatus}`;
}

function getTemperatureStatus(temperature) {
  const LOW_TEMPERATURE_THRESHOLD = 18;
  const HIGH_TEMPERATUR_THRESHOLD = 29;

  const isCold = temperature < LOW_TEMPERATURE_THRESHOLD;
  const isHot = temperature > HIGH_TEMPERATUR_THRESHOLD;

  if (temperature == null) return "offline";
  if (isCold) return "Cold";
  if (isHot) return "Hot";
  return "Comfortable";
}

function getHumidityStatus(humidity) {
  const LOW_HUMIDITY_THRESHOLD = 30;
  const HIGH_HUMIDITY_THRESHOLD = 60;

  const isDry = humidity < LOW_HUMIDITY_THRESHOLD;
  const isDamp = humidity > HIGH_HUMIDITY_THRESHOLD;

  if (humidity == null) return "offline";
  if (isDry) return "Dry";
  if (isDamp) return "Damp";
  return "Comfortable";
}

// console.log(getRoomStatus());
// console.log(getRoomStatus(0, 0)); //cold dry
// console.log(getRoomStatus(0, 70)); //cold damp
// console.log(getRoomStatus(0, 50)); //cold
// console.log(getRoomStatus(30, 0)); //hotdry
// console.log(getRoomStatus(30, 70)); //hotdamp
// console.log(getRoomStatus(30, 50)); //hot
// console.log(getRoomStatus(20, 0)); //dry
// console.log(getRoomStatus(20, 70)); //damp
// console.log(getRoomStatus(20, 50)); //comfortable

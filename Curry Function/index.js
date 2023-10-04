// Havo harorati!
const weather = async (time) => {
  try {
    let promise = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=41.3139&longitude=69.2453&hourly=temperature_2m,relativehumidity_2m,rain&timezone=auto"
    );
    promise = await promise.json();
    let vaqt = promise.hourly.time;
    let a = vaqt.findIndex((v) => v == time);
    let temp = promise.hourly.temperature_2m[a];
    let rain = promise.hourly.rain[a];
    let shamol = promise.hourly.relativehumidity_2m[a];
    console.log(`Obhavo malumotlar!`);
    console.log(`Havo harorati: ${temp}*C`);
    console.log(`Shamol tezligi: ${shamol}km/soat`);
    console.log(`Yog'ingarchilik ehtimoli: ${rain}%`);
    return `Yog'ingarchilik ehtimoli: ${rain}%`;
  } catch {
    console.log(`Internetga ulang yoki APIni tekshiring!`);
  }
};
weather(`2023-10-04T16:00`);

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import styles from "./Forecast.module.scss";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function Forecast({ data }) {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  return (
    <>
      <label className={styles.title}>Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className={styles.dailyItem}>
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt='weather-icon'
                    className={styles.iconDaily}
                  />
                  <span className={styles.day}>{forecastDays[index]}</span>
                  <span className={styles.description}>
                    {item.weather[0].description}
                  </span>
                  <span className={styles.minMax}>
                    {Math.round(item.main.temp_min)}°C /{" "}
                    {Math.round(item.main.temp_max)}°C
                  </span>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className={styles.dailyDetails}>
                <div className={styles.dailyDetailsItem}>
                  <span>Pressure</span>
                  <span>{item.main.pressure} hPa</span>
                </div>

                <div className={styles.dailyDetailsItem}>
                  <span>Humidity</span>
                  <span>{item.main.humidity} %</span>
                </div>

                <div className={styles.dailyDetailsItem}>
                  <span>Clouds</span>
                  <span>{item.clouds.all} %</span>
                </div>

                <div className={styles.dailyDetailsItem}>
                  <span>Wind speed</span>
                  <span>{item.wind.speed} m/s</span>
                </div>

                <div className={styles.dailyDetailsItem}>
                  <span>Sea level</span>
                  <span>{item.main.sea_level} m</span>
                </div>

                <div className={styles.dailyDetailsItem}>
                  <span>Feels like:</span>
                  <span>{Math.round(item.main.feels_like)}°C</span>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

export default Forecast;

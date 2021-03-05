export const iconClassConverter = (value) => {
  if (value === "sunny") {
    return "sun";
  } else if (value === "rainy") {
    return "cloud-rain";
  } else if (value === "windy") {
    return "wind";
  } else if (value === "snowy") {
    return "snowflake";
  }
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

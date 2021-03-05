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

export const windIconDirection = (value) => {
  if (value === "north-east") {
    return "45deg";
  } else if (value === "south-east") {
    return "135deg";
  } else if (value === "south-west") {
    return "225deg";
  } else if (value === "north-west") {
    return "315deg";
  }
};

export const tempConverter = (tempUnit, value) => {
  const unit = tempUnit.toLowerCase();
  if (unit === "kelvin") {
    return parseInt(value) + 273.15;
  }
};

export const kilometarsPerHour = (value) => {
  return value * 3.6;
};

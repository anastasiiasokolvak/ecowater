const waterData = {
  "Вінницька": {
    ph: 7.5,
    pollutionIndex: 2.3,
    pollutionLevel: "низький",
    quality: 77,
    monthlyPH: [7.4, 7.5, 7.6, 7.5, 7.4, 7.5, 7.6, 7.7, 7.6, 7.5, 7.5, 7.4],
    monthlyQuality: [78, 77, 76, 77, 78, 77, 76, 75, 76, 77, 78, 77]
  },

  "Волинська": {
    ph: 7.2,
    pollutionIndex: 2.8,
    pollutionLevel: "помірний",
    quality: 72,
    monthlyPH: [7.1, 7.2, 7.3, 7.2, 7.1, 7.2, 7.3, 7.3, 7.2, 7.1, 7.1, 7.2],
    monthlyQuality: [73, 72, 71, 72, 73, 72, 71, 71, 72, 73, 72, 72]
  },

  "Дніпропетровська": {
    ph: 7.8,
    pollutionIndex: 4.0,
    pollutionLevel: "високий",
    quality: 60,
    monthlyPH: [7.7, 7.8, 7.9, 7.8, 7.7, 7.8, 7.9, 7.9, 7.8, 7.7, 7.6, 7.7],
    monthlyQuality: [62, 60, 59, 60, 61, 60, 59, 58, 59, 60, 61, 60]
  },

  "Донецька": {
    ph: 7.7,
    pollutionIndex: 4.5,
    pollutionLevel: "високий",
    quality: 55,
    monthlyPH: [7.6, 7.7, 7.8, 7.7, 7.6, 7.7, 7.8, 7.8, 7.7, 7.6, 7.6, 7.7],
    monthlyQuality: [56, 55, 54, 55, 56, 55, 54, 53, 54, 55, 56, 55]
  },

  "Житомирська": {
    ph: 7.3,
    pollutionIndex: 2.4,
    pollutionLevel: "низький",
    quality: 76,
    monthlyPH: [7.2, 7.3, 7.4, 7.3, 7.2, 7.3, 7.4, 7.4, 7.3, 7.2, 7.2, 7.3],
    monthlyQuality: [77, 76, 75, 76, 77, 76, 75, 74, 75, 76, 77, 76]
  },

  "Закарпатська": {
    ph: 7.6,
    pollutionIndex: 1.9,
    pollutionLevel: "низький",
    quality: 81,
    monthlyPH: [7.5, 7.6, 7.7, 7.6, 7.5, 7.6, 7.7, 7.8, 7.7, 7.6, 7.6, 7.5],
    monthlyQuality: [82, 81, 80, 81, 82, 81, 80, 79, 80, 81, 82, 81]
  },

  "Запорізька": {
    ph: 7.8,
    pollutionIndex: 3.8,
    pollutionLevel: "високий",
    quality: 62,
    monthlyPH: [7.7, 7.8, 7.9, 7.8, 7.7, 7.8, 7.9, 7.9, 7.8, 7.7, 7.7, 7.8],
    monthlyQuality: [64, 63, 62, 63, 64, 62, 61, 62, 63, 64, 63, 62]
  },

  "Івано-Франківська": {
    ph: 7.4,
    pollutionIndex: 2.1,
    pollutionLevel: "низький",
    quality: 79,
    monthlyPH: [7.3, 7.4, 7.5, 7.4, 7.3, 7.4, 7.5, 7.6, 7.5, 7.4, 7.4, 7.3],
    monthlyQuality: [80, 79, 78, 79, 80, 79, 78, 77, 78, 79, 80, 79]
  },

  "Київська": {
    ph: 7.2,
    pollutionIndex: 3.2,
    pollutionLevel: "помірний",
    quality: 68,
    monthlyPH: [7.1, 7.2, 7.3, 7.2, 7.1, 7.2, 7.3, 7.3, 7.2, 7.1, 7.1, 7.2],
    monthlyQuality: [69, 68, 66, 67, 68, 68, 67, 66, 67, 68, 69, 67]
  },

  "Кіровоградська": {
    ph: 7.5,
    pollutionIndex: 2.7,
    pollutionLevel: "помірний",
    quality: 73,
    monthlyPH: [7.4, 7.5, 7.6, 7.5, 7.4, 7.5, 7.6, 7.6, 7.5, 7.4, 7.4, 7.5],
    monthlyQuality: [74, 73, 72, 73, 74, 73, 72, 71, 72, 73, 74, 73]
  },

  "Луганська": {
    ph: 7.8,
    pollutionIndex: 4.3,
    pollutionLevel: "високий",
    quality: 57,
    monthlyPH: [7.7, 7.8, 7.9, 7.8, 7.7, 7.8, 7.9, 7.9, 7.8, 7.7, 7.7, 7.8],
    monthlyQuality: [58, 57, 56, 57, 58, 57, 56, 55, 56, 57, 58, 57]
  },

  "Львівська": {
    ph: 7.2,
    pollutionIndex: 3.0,
    pollutionLevel: "помірний",
    quality: 70,
    monthlyPH: [7.1, 7.2, 7.3, 7.2, 7.1, 7.2, 7.3, 7.3, 7.2, 7.1, 7.2, 7.2],
    monthlyQuality: [71, 70, 69, 70, 71, 70, 69, 68, 69, 70, 71, 70]
  },

  "Миколаївська": {
    ph: 7.6,
    pollutionIndex: 3.4,
    pollutionLevel: "помірний",
    quality: 66,
    monthlyPH: [7.5, 7.6, 7.7, 7.6, 7.5, 7.6, 7.7, 7.8, 7.7, 7.6, 7.6, 7.5],
    monthlyQuality: [67, 66, 65, 66, 67, 66, 65, 64, 65, 66, 67, 66]
  },

  "Одеська": {
    ph: 7.9,
    pollutionIndex: 4.6,
    pollutionLevel: "високий",
    quality: 54,
    monthlyPH: [7.8, 7.9, 8.0, 7.9, 7.8, 7.9, 8.0, 8.0, 7.9, 7.8, 7.8, 7.9],
    monthlyQuality: [55, 54, 53, 54, 55, 54, 53, 52, 53, 54, 55, 54]
  },

  "Полтавська": {
    ph: 7.3,
    pollutionIndex: 2.5,
    pollutionLevel: "низький",
    quality: 75,
    monthlyPH: [7.2, 7.3, 7.4, 7.3, 7.2, 7.3, 7.4, 7.4, 7.3, 7.2, 7.3, 7.3],
    monthlyQuality: [76, 75, 74, 75, 76, 75, 74, 73, 74, 75, 76, 75]
  },

  "Рівненська": {
    ph: 7.3,
    pollutionIndex: 2.2,
    pollutionLevel: "низький",
    quality: 78,
    monthlyPH: [7.2, 7.3, 7.4, 7.3, 7.2, 7.3, 7.4, 7.5, 7.4, 7.3, 7.3, 7.2],
    monthlyQuality: [79, 78, 77, 78, 79, 78, 77, 76, 77, 78, 79, 78]
  },

  "Сумська": {
    ph: 7.4,
    pollutionIndex: 2.9,
    pollutionLevel: "помірний",
    quality: 71,
    monthlyPH: [7.3, 7.4, 7.5, 7.4, 7.3, 7.4, 7.5, 7.5, 7.4, 7.3, 7.3, 7.4],
    monthlyQuality: [72, 71, 70, 71, 72, 71, 70, 69, 70, 71, 72, 71]
  },

  "Тернопільська": {
    ph: 7.2,
    pollutionIndex: 2.6,
    pollutionLevel: "помірний",
    quality: 74,
    monthlyPH: [7.1, 7.2, 7.3, 7.2, 7.1, 7.2, 7.3, 7.3, 7.2, 7.1, 7.2, 7.2],
    monthlyQuality: [75, 74, 73, 74, 75, 74, 73, 72, 73, 74, 75, 74]
  },

  "Харківська": {
    ph: 7.5,
    pollutionIndex: 3.7,
    pollutionLevel: "помірний",
    quality: 63,
    monthlyPH: [7.4, 7.5, 7.6, 7.5, 7.4, 7.5, 7.6, 7.7, 7.6, 7.5, 7.5, 7.4],
    monthlyQuality: [64, 63, 62, 63, 64, 63, 62, 61, 62, 63, 64, 63]
  },

  "Херсонська": {
    ph: 7.8,
    pollutionIndex: 3.9,
    pollutionLevel: "високий",
    quality: 61,
    monthlyPH: [7.7, 7.8, 7.9, 7.8, 7.7, 7.8, 7.9, 7.9, 7.8, 7.7, 7.7, 7.8],
    monthlyQuality: [62, 61, 60, 61, 62, 61, 60, 59, 60, 61, 62, 61]
  },

  "Хмельницька": {
    ph: 7.3,
    pollutionIndex: 2.1,
    pollutionLevel: "низький",
    quality: 79,
    monthlyPH: [7.2, 7.3, 7.4, 7.3, 7.2, 7.3, 7.4, 7.4, 7.3, 7.2, 7.3, 7.3],
    monthlyQuality: [80, 79, 78, 79, 80, 79, 78, 77, 78, 79, 80, 79]
  },

  "Черкаська": {
    ph: 7.4,
    pollutionIndex: 2.7,
    pollutionLevel: "помірний",
    quality: 73,
    monthlyPH: [7.3, 7.4, 7.5, 7.4, 7.3, 7.4, 7.5, 7.5, 7.4, 7.3, 7.3, 7.4],
    monthlyQuality: [74, 73, 72, 73, 74, 73, 72, 71, 72, 73, 74, 73]
  },

  "Чернівецька": {
    ph: 7.2,
    pollutionIndex: 2.0,
    pollutionLevel: "низький",
    quality: 80,
    monthlyPH: [7.1, 7.2, 7.3, 7.2, 7.1, 7.2, 7.3, 7.3, 7.2, 7.1, 7.1, 7.2],
    monthlyQuality: [81, 80, 79, 80, 81, 80, 79, 78, 79, 80, 81, 80]
  },

  "Чернігівська": {
    ph: 7.3,
    pollutionIndex: 2.6,
    pollutionLevel: "помірний",
    quality: 74,
    monthlyPH: [7.2, 7.3, 7.4, 7.3, 7.2, 7.3, 7.4, 7.4, 7.3, 7.2, 7.3, 7.3],
    monthlyQuality: [75, 74, 73, 74, 75, 74, 73, 72, 73, 74, 75, 74]
  },

  "Київ": {
    ph: 7.2,
    pollutionIndex: 3.3,
    pollutionLevel: "помірний",
    quality: 67,
    monthlyPH: [7.1, 7.2, 7.3, 7.2, 7.1, 7.2, 7.3, 7.3, 7.2, 7.1, 7.2, 7.2],
    monthlyQuality: [68, 67, 66, 67, 68, 67, 66, 65, 66, 67, 68, 67]
  }
};

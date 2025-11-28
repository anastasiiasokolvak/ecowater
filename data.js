const regionsData = {
  "vinnytsia": {
    ph: 7.5,
    pollutionIndex: 2.3,
    pollution: "низький",
    status: "good",
    quality: 77,
    monthlyPH: [7.4, 7.5, 7.6, 7.5, 7.4, 7.5, 7.6, 7.7, 7.6, 7.5, 7.5, 7.4],
    monthlyQuality: [78, 77, 76, 77, 78, 77, 76, 75, 76, 77, 78, 77]
  },

  "volyn": {
    ph: 7.2,
    pollutionIndex: 2.8,
    pollution: "помірний",
    status: "medium", 
    quality: 72,
    monthlyPH: [7.1, 7.2, 7.3, 7.2, 7.1, 7.2, 7.3, 7.3, 7.2, 7.1, 7.1, 7.2],
    monthlyQuality: [73, 72, 71, 72, 73, 72, 71, 71, 72, 73, 72, 72]
  },

  "dnipro": {
    ph: 7.8,
    pollutionIndex: 4.0,
    pollution: "високий",
    status: "bad",
    quality: 60,
    monthlyPH: [7.7, 7.8, 7.9, 7.8, 7.7, 7.8, 7.9, 7.9, 7.8, 7.7, 7.6, 7.7],
    monthlyQuality: [62, 60, 59, 60, 61, 60, 59, 58, 59, 60, 61, 60]
  },

  "donetsk": {
    ph: 7.7,
    pollutionIndex: 4.5,
    pollution: "високий",
    status: "bad",
    quality: 55,
    monthlyPH: [7.6, 7.7, 7.8, 7.7, 7.6, 7.7, 7.8, 7.8, 7.7, 7.6, 7.6, 7.7],
    monthlyQuality: [56, 55, 54, 55, 56, 55, 54, 53, 54, 55, 56, 55]
  },

  "zhytomyr": {
    ph: 7.3,
    pollutionIndex: 2.4,
    pollution: "низький",
    status: "good",
    quality: 76,
    monthlyPH: [7.2, 7.3, 7.4, 7.3, 7.2, 7.3, 7.4, 7.4, 7.3, 7.2, 7.2, 7.3],
    monthlyQuality: [77, 76, 75, 76, 77, 76, 75, 74, 75, 76, 77, 76]
  },

  "zakarpattia": {
    ph: 7.6,
    pollutionIndex: 1.9,
    pollution: "низький",
    status: "good",
    quality: 81,
    monthlyPH: [7.5, 7.6, 7.7, 7.6, 7.5, 7.6, 7.7, 7.8, 7.7, 7.6, 7.6, 7.5],
    monthlyQuality: [82, 81, 80, 81, 82, 81, 80, 79, 80, 81, 82, 81]
  },

  "zaporizhzhia": {
    ph: 7.8,
    pollutionIndex: 3.8,
    pollution: "високий",
    status: "bad",
    quality: 62,
    monthlyPH: [7.7, 7.8, 7.9, 7.8, 7.7, 7.8, 7.9, 7.9, 7.8, 7.7, 7.7, 7.8],
    monthlyQuality: [64, 63, 62, 63, 64, 62, 61, 62, 63, 64, 63, 62]
  },

  "ivano-frankivsk": {
    ph: 7.4,
    pollutionIndex: 2.1,
    pollution: "низький",
    status: "good",
    quality: 79,
    monthlyPH: [7.3, 7.4, 7.5, 7.4, 7.3, 7.4, 7.5, 7.6, 7.5, 7.4, 7.4, 7.3],
    monthlyQuality: [80, 79, 78, 79, 80, 79, 78, 77, 78, 79, 80, 79]
  },

  "kyivObl": {
    ph: 7.2,
    pollutionIndex: 3.2,
    pollution: "помірний",
    status: "medium", 
    quality: 68,
    monthlyPH: [7.1, 7.2, 7.3, 7.2, 7.1, 7.2, 7.3, 7.3, 7.2, 7.1, 7.1, 7.2],
    monthlyQuality: [69, 68, 66, 67, 68, 68, 67, 66, 67, 68, 69, 67]
  },

  "kirovohrad": {
    ph: 7.5,
    pollutionIndex: 2.7,
    pollution: "помірний",
    status: "medium", 
    quality: 73,
    monthlyPH: [7.4, 7.5, 7.6, 7.5, 7.4, 7.5, 7.6, 7.6, 7.5, 7.4, 7.4, 7.5],
    monthlyQuality: [74, 73, 72, 73, 74, 73, 72, 71, 72, 73, 74, 73]
  },

  "luhansk": {
    ph: 7.8,
    pollutionIndex: 4.3,
    pollution: "високий",
    status: "bad",
    quality: 57,
    monthlyPH: [7.7, 7.8, 7.9, 7.8, 7.7, 7.8, 7.9, 7.9, 7.8, 7.7, 7.7, 7.8],
    monthlyQuality: [58, 57, 56, 57, 58, 57, 56, 55, 56, 57, 58, 57]
  },

  "lviv": {
    ph: 7.2,
    pollutionIndex: 3.0,
    pollution: "помірний",
    status: "medium", 
    quality: 70,
    monthlyPH: [7.1, 7.2, 7.3, 7.2, 7.1, 7.2, 7.3, 7.3, 7.2, 7.1, 7.2, 7.2],
    monthlyQuality: [71, 70, 69, 70, 71, 70, 69, 68, 69, 70, 71, 70]
  },

  "mykolaiv": {
    ph: 7.6,
    pollutionIndex: 3.4,
    pollution: "помірний",
    status: "medium", 
    quality: 66,
    monthlyPH: [7.5, 7.6, 7.7, 7.6, 7.5, 7.6, 7.7, 7.8, 7.7, 7.6, 7.6, 7.5],
    monthlyQuality: [67, 66, 65, 66, 67, 66, 65, 64, 65, 66, 67, 66]
  },

  "odesa": {
    ph: 7.9,
    pollutionIndex: 4.6,
    pollution: "високий",
    status: "bad",
    quality: 54,
    monthlyPH: [7.8, 7.9, 8.0, 7.9, 7.8, 7.9, 8.0, 8.0, 7.9, 7.8, 7.8, 7.9],
    monthlyQuality: [55, 54, 53, 54, 55, 54, 53, 52, 53, 54, 55, 54]
  },

  "poltava": {
    ph: 7.3,
    pollutionIndex: 2.5,
    pollution: "низький",
    status: "good",
    quality: 75,
    monthlyPH: [7.2, 7.3, 7.4, 7.3, 7.2, 7.3, 7.4, 7.4, 7.3, 7.2, 7.3, 7.3],
    monthlyQuality: [76, 75, 74, 75, 76, 75, 74, 73, 74, 75, 76, 75]
  },

  "rivne": {
    ph: 7.3,
    pollutionIndex: 2.2,
    pollution: "низький",
    status: "good",
    quality: 78,
    monthlyPH: [7.2, 7.3, 7.4, 7.3, 7.2, 7.3, 7.4, 7.5, 7.4, 7.3, 7.3, 7.2],
    monthlyQuality: [79, 78, 77, 78, 79, 78, 77, 76, 77, 78, 79, 78]
  },

  "sumy": {
    ph: 7.4,
    pollutionIndex: 2.9,
    pollution: "помірний",
    status: "medium", 
    quality: 71,
    monthlyPH: [7.3, 7.4, 7.5, 7.4, 7.3, 7.4, 7.5, 7.5, 7.4, 7.3, 7.3, 7.4],
    monthlyQuality: [72, 71, 70, 71, 72, 71, 70, 69, 70, 71, 72, 71]
  },

  "ternopil": {
    ph: 7.2,
    pollutionIndex: 2.6,
    pollution: "помірний",
    status: "medium", 
    quality: 74,
    monthlyPH: [7.1, 7.2, 7.3, 7.2, 7.1, 7.2, 7.3, 7.3, 7.2, 7.1, 7.2, 7.2],
    monthlyQuality: [75, 74, 73, 74, 75, 74, 73, 72, 73, 74, 75, 74]
  },

  "kharkiv": {
    ph: 7.5,
    pollutionIndex: 3.7,
    pollution: "помірний",
    status: "medium", 
    quality: 63,
    monthlyPH: [7.4, 7.5, 7.6, 7.5, 7.4, 7.5, 7.6, 7.7, 7.6, 7.5, 7.5, 7.4],
    monthlyQuality: [64, 63, 62, 63, 64, 63, 62, 61, 62, 63, 64, 63]
  },

  "kherson": {
    ph: 7.8,
    pollutionIndex: 3.9,
    pollution: "високий",
    status: "bad",
    quality: 61,
    monthlyPH: [7.7, 7.8, 7.9, 7.8, 7.7, 7.8, 7.9, 7.9, 7.8, 7.7, 7.7, 7.8],
    monthlyQuality: [62, 61, 60, 61, 62, 61, 60, 59, 60, 61, 62, 61]
  },

  "khmelnytskyi": {
    ph: 7.3,
    pollutionIndex: 2.1,
    pollution: "низький",
    status: "good",
    quality: 79,
    monthlyPH: [7.2, 7.3, 7.4, 7.3, 7.2, 7.3, 7.4, 7.4, 7.3, 7.2, 7.3, 7.3],
    monthlyQuality: [80, 79, 78, 79, 80, 79, 78, 77, 78, 79, 80, 79]
  },

  "cherkasy": {
    ph: 7.4,
    pollutionIndex: 2.7,
    pollution: "помірний",
    status: "medium", 
    quality: 73,
    monthlyPH: [7.3, 7.4, 7.5, 7.4, 7.3, 7.4, 7.5, 7.5, 7.4, 7.3, 7.3, 7.4],
    monthlyQuality: [74, 73, 72, 73, 74, 73, 72, 71, 72, 73, 74, 73]
  },

  "chernivtsi": {
    ph: 7.2,
    pollutionIndex: 2.0,
    pollution: "низький",
    status: "good",
    quality: 80,
    monthlyPH: [7.1, 7.2, 7.3, 7.2, 7.1, 7.2, 7.3, 7.3, 7.2, 7.1, 7.1, 7.2],
    monthlyQuality: [81, 80, 79, 80, 81, 80, 79, 78, 79, 80, 81, 80]
  },

  "chernihiv": {
    ph: 7.3,
    pollutionIndex: 2.6,
    pollution: "помірний",
    status: "medium", 
    quality: 74,
    monthlyPH: [7.2, 7.3, 7.4, 7.3, 7.2, 7.3, 7.4, 7.4, 7.3, 7.2, 7.3, 7.3],
    monthlyQuality: [75, 74, 73, 74, 75, 74, 73, 72, 73, 74, 75, 74]
  },

  "kyiv": {
    ph: 7.2,
    pollutionIndex: 3.3,
    pollution: "помірний",
    status: "medium", 
    quality: 67,
    monthlyPH: [7.1, 7.2, 7.3, 7.2, 7.1, 7.2, 7.3, 7.3, 7.2, 7.1, 7.2, 7.2],
    monthlyQuality: [68, 67, 66, 67, 68, 67, 66, 65, 66, 67, 68, 67]
  }
};
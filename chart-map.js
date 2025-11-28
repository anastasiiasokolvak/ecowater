let waterChart = null;
let currentRegionData = null;

function createEmptyChart() {
    const ctx = document.getElementById("waterChart").getContext("2d");

    if (waterChart) waterChart.destroy();

    waterChart = new Chart(ctx, {
        type: "line",
        data: { labels: [], datasets: [] },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { min: 5, max: 8, ticks: { display: false }, grid: { display: false } },
                x: { ticks: { display: false }, grid: { display: false } }
            }
        }
    });

    document.getElementById("chart-placeholder").style.display = "block";
}

function updateChart(regionId) {
    currentRegionData = regionsData[regionId];
    const region = currentRegionData;
    if (!region) return;

    const ctx = document.getElementById("waterChart").getContext("2d");

    if (waterChart) waterChart.destroy();

    waterChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Трав.", "Черв.", "Лип.", "Серп.", "Вер.", "Жовт."],
            datasets: [
                {
                    label: "Рівень pH",
                    data: region.monthlyPH.slice(0, 6),
                    borderColor: "#0788aa",
                    backgroundColor: "rgba(7,136,170,0.2)",
                    borderWidth: 3,
                    pointRadius: 5,
                    pointBackgroundColor: "#0788aa",
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { min: 5, max: 9, ticks: { color: "#003049", font: { size: 14 } } },
                x: { ticks: { color: "#003049", font: { size: 14 } } }
            }
        }
    });

    updateRecommendations(region.monthlyPH[5]);
    document.getElementById("chart-placeholder").style.display = "none";
}

function calculateSmartForecast(history) {
    const n = history.length;
    const last = history[n - 1];

    let slopes = [];
    for (let i = 1; i < n; i++) {
        slopes.push(history[i] - history[i - 1]);
    }
    const avgSlope = slopes.reduce((a, b) => a + b, 0) / slopes.length;

    let accel = [];
    for (let i = 1; i < slopes.length; i++) {
        accel.push(slopes[i] - slopes[i - 1]);
    }
    const avgAccel = accel.reduce((a, b) => a + b, 0) / accel.length || 0;

    const mean = history.reduce((a,b)=>a+b)/n;
    const variance = history.reduce((a,b)=>a+Math.pow(b-mean,2),0)/n;
    const volatility = Math.sqrt(variance);

    let forecast = last + avgSlope * 1.3 + avgAccel * 0.5;

    forecast += (volatility * 0.1);

    return forecast.toFixed(2);
}

function interpretWaterState(forecast, avgSlope, volatility) {
    let text = "";

    if (forecast >= 6.5 && forecast <= 8.5) {
        text += "Стан водойм очікується стабільним. Значення pH перебуває у природному діапазоні. ";
    } else if (forecast > 8.5) {
        text += "Очікується підвищення pH понад норму. Це може свідчити про підлуження води або зростання жорсткості. ";
    } else {
        text += "Можливе підкислення водойми. Значення прогнозу нижче екологічної норми. ";
    }

    if (avgSlope > 0.05) {
        text += "Фіксується тенденція до зростання pH. ";
    } else if (avgSlope < -0.05) {
        text += "Фіксується тенденція до зниження pH. ";
    } else {
        text += "Тренд зміни pH незначний. ";
    }

    if (volatility < 0.1) {
        text += "Коливання показників мінімальні — водойми стабільні.";
    } else if (volatility < 0.2) {
        text += "Коливання середні — ситуація контрольована.";
    } else {
        text += "Коливання високі — можливі непередбачувані зміни.";
    }

    return text;
}

document.getElementById("aiForecastBtn").addEventListener("click", function () {
    
    const aiBox = document.getElementById("aiResult");

    if (!currentRegionData || !currentRegionData.monthlyPH) {
        aiBox.innerText = "Оберіть регіон для прогнозу.";
        return;
    }

    const history = currentRegionData.monthlyPH.slice(0, 6);
    const n = history.length;
    const last = history[n - 1];

    let slopes = [];
    for (let i = 1; i < n; i++) {
        slopes.push(history[i] - history[i - 1]);
    }
    const avgSlope = slopes.reduce((a, b) => a + b, 0) / slopes.length;

    const mean = history.reduce((a, b) => a + b) / n;
    const variance = history.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / n;
    const volatilityRaw = Math.sqrt(variance);
    const maxDiff = Math.max(...history) - Math.min(...history);

    const forecast = (last + avgSlope).toFixed(2);

    const interpretation = interpretWaterState(
    Number(forecast),
    avgSlope,
    volatilityRaw
);

    aiBox.innerHTML = `
    <strong>AI-аналітика:</strong><br>
    • Середній тренд: ${avgSlope.toFixed(3)} pH/місяць<br>
    • Найбільша зміна між місяцями: ${maxDiff.toFixed(2)} pH<br>
    • Волатильність ряду: ${volatilityRaw.toFixed(2)}<br>
    • Прогнозоване значення pH: <strong>${forecast}</strong><br><br>
    <strong>Прогноз стану водойми:</strong><br>
    ${interpretation}
`;
aiResult.style.display = "block"

    updateRecommendations(forecast);
    addForecastToChart(forecast);
});

function updateRecommendations(phValue) {
    const box = document.getElementById("recommendation-box");
    const text = document.getElementById("recommendation-text");

    box.style.display = "block";

    if (phValue < 6.5) {
        text.innerText = "pH занижений. Можлива корозія. Перевірте мінералізацію.";
        box.style.background = "#ffecec";
    }
    else if (phValue > 8.5) {
        text.innerText = "Високий pH. Можлива жорсткість води.";
        box.style.background = "#fff3cd";
    }
    else {
        text.innerText = "pH у нормі. Вода стабільна.";
        box.style.background = "#e8ffe6";
    }
}

createEmptyChart();
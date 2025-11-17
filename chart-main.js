// ======================================================
// 0. AI-ФУНКЦІЯ ДЛЯ АВТОМАТИЧНОГО ОПИСУ ГРАФІКА
// ======================================================
function generateAIDescription(values) {
    const min = Math.min(...values);
    const max = Math.max(...values);
    const avg = values.reduce((a, b) => a + b, 0) / values.length;

    const minIndex = values.indexOf(min);
    const maxIndex = values.indexOf(max);

    const months = [
        "Січень","Лютий","Березень","Квітень","Травень","Червень",
        "Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"
    ];

    let trend = "";
    if (values[0] < values[values.length - 1]) {
        trend = "покращення якості води";
    } else if (values[0] > values[values.length - 1]) {
        trend = "погіршення якості води";
    } else {
        trend = "стабільний стан якості";
    }

    return `
        Графік демонструє ${trend} протягом року. 
        Найвищий індекс (${max.toFixed(1)}) зафіксовано у ${months[maxIndex]}, 
        а найнижчий (${min.toFixed(1)}) — у ${months[minIndex]}. 
        Середнє значення індексу за 12 місяців становить ${avg.toFixed(1)}.
    `;
}



// ======================================================
// 1. РОЗРАХУНОК СЕРЕДНІХ ДАНИХ ПО УКРАЇНІ
// ======================================================

// Підготовка масивів на 12 місяців
let avgPH = Array(12).fill(0);
let avgQuality = Array(12).fill(0);

let regionsCount = Object.keys(waterData).length;

// Сума по всіх регіонах
for (let region in waterData) {
    let r = waterData[region];

    for (let i = 0; i < 12; i++) {
        avgPH[i] += r.monthlyPH[i];
        avgQuality[i] += r.monthlyQuality[i];
    }
}

// Середні значення
avgPH = avgPH.map(v => Number((v / regionsCount).toFixed(2)));
avgQuality = avgQuality.map(v => Number((v / regionsCount).toFixed(2)));

console.log("Середній індекс якості:", avgQuality);


// ======================================================
// 2. ДИНАМІЧНІ МЕЖІ ГРАФІКА
// ======================================================

let minVal = Math.min(...avgQuality);
let maxVal = Math.max(...avgQuality);

let yMin = Math.floor(minVal - 0.5);
let yMax = Math.ceil(maxVal + 0.5);


// ======================================================
// 3. ПЕРЕДАЄМО AI-ТЕКСТ У TOOLTIP
// ======================================================
document.getElementById("chart-ai-text").innerText = generateAIDescription(avgQuality);


// ======================================================
// 4. ПОБУДОВА ГРАФІКА
// ======================================================

const ctx = document.getElementById("mainChart").getContext("2d");

const gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "rgba(0, 166, 166, 0.30)");
gradient.addColorStop(1, "rgba(0, 166, 166, 0)");

new Chart(ctx, {
    type: "line",
    data: {
        labels: [
            "Січ.", "Лют.", "Бер.", "Квіт.", "Трав.", "Чер.",
            "Лип.", "Серп.", "Вер.", "Жовт.", "Лист.", "Груд."
        ],
        datasets: [
            {
                label: "",
                data: avgQuality,
                borderColor: "#00A6A6",
                backgroundColor: gradient,
                borderWidth: 3,
                fill: true,
                pointBackgroundColor: "#00A6A6",
                pointRadius: 5,
                tension: 0.45
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: {
                    color: "#0B2A4A",
                    font: { size: 15, weight: "600" }
                }
            },
            y: {
                min: yMin,
                max: yMax,
                ticks: {
                    stepSize: 0.5,
                    color: "#0B2A4A",
                    font: { size: 15, weight: "600" }
                },
                grid: {
                    color: "rgba(0,0,0,0.15)",
                    lineWidth: 1
                }
            }
        }
    }
});

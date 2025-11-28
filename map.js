const regionColors = {
    good: "#48b574",
    medium: "#f4a540",
    bad: "#d74343"
};

function updateRegionData(regionId) {
    const data = regionsData[regionId];
    if (!data) return;

    document.getElementById("ph-value").innerText = data.ph;
    document.getElementById("water-quality").innerText = data.quality + "%";
    document.getElementById("pollution-level").innerText = data.pollution;
}

function highlightRegion(regionId) {
    document.querySelectorAll("svg path").forEach(path => {
        path.style.fill = "#a5c9d3";
    });

    const regionStatus = regionsData[regionId].status;
    const color = regionColors[regionStatus];

    document.getElementById(regionId).style.fill = color;
}

document.querySelectorAll("svg path").forEach(region => {
    region.style.cursor = "pointer";

    region.addEventListener("click", () => {
        const regionId = region.id;

        highlightRegion(regionId);
        updateRegionData(regionId);
        updateChart(regionId);
    });
});
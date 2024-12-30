export async function assessRisk(assetData) {
    try {
        const report = await analyzeRisk(assetData);
        console.log("Risk Assessment Report:", report);
        return report;
    } catch (error) {
        console.error("Risk assessment failed:", error);
    }
}

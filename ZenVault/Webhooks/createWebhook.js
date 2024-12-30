export async function createWebhook(runtime, networkId, eventType, notificationUri) {
    try {
        const response = await runtime.triggerAction("CREATE_WEBHOOK", {
            networkId,
            eventType,
            notificationUri,
        });
        console.log("Webhook created:", response);
    } catch (error) {
        console.error("Webhook creation failed:", error);
    }
}

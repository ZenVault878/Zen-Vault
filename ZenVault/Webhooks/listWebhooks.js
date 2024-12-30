// listWebhooks.js
import { webhookPlugin } from "@EXAI/plugin-coinbase-webhooks";

export async function listWebhooks(runtime) {
    try {
        // 使用 webhookProvider 来获取所有 Webhooks
        const provider = runtime.providers.get("webhookProvider");
        if (!provider) {
            throw new Error("Webhook provider is not available.");
        }

        // 获取已注册的 Webhooks
        const webhooks = await provider.getWebhooks();
        console.log("Registered Webhooks:", webhooks);

        return webhooks; // 返回 Webhooks 列表
    } catch (error) {
        console.error("Failed to retrieve webhooks:", error);
    }
}

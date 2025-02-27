import { elizaLogger } from "@elizaos/core";
import type { Client, IAgentRuntime } from "@elizaos/core";
import { TelegramClient } from "./telegramClient.ts";
import { validateTelegramConfig } from "./environment.ts";

console.log("telegramClient");

export const TelegramClientInterface: Client = {
    name: "telegram",
    start: async (runtime: IAgentRuntime) => {
        await validateTelegramConfig(runtime);

        const tg = new TelegramClient(
            runtime,
            runtime.getSetting("TELEGRAM_BOT_TOKEN")
        );

        await tg.start();

        elizaLogger.success(
            `✅ Telegram client successfully started for character ${runtime.character.name}`
        );
        return tg;
    },
    stop: async (client: TelegramClient) => {
        await client.stop();
    }
};

export default TelegramClientInterface;

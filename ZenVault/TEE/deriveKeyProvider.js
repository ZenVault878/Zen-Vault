import { DeriveKeyProvider } from "@EXAI/plugin-tee";

export async function deriveSecureKey(path, subjectId) {
    const provider = new DeriveKeyProvider();
    try {
        const rawKey = await provider.rawDeriveKey(path, subjectId);
        console.log("Raw Key:", rawKey.asUint8Array());
    } catch (error) {
        console.error("Key derivation failed:", error);
    }
}

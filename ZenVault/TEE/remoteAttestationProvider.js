import { RemoteAttestationProvider } from "@EXAI/plugin-tee";

export async function generateRemoteAttestation(reportData) {
    const provider = new RemoteAttestationProvider();
    try {
        const attestation = await provider.generateAttestation(reportData);
        console.log("Attestation:", attestation);
    } catch (error) {
        console.error("Attestation generation failed:", error);
    }
}

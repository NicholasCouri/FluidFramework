import { ConfigTypes, IConfigProviderBase } from "@fluidframework/telemetry-utils";

export const mockConfigProvider = ((settings: Record<string, ConfigTypes> = {}): IConfigProviderBase => {
    settings["Fluid.ContainerRuntime.UseDataStoreAliasing"] = "true";
    settings["Fluid.GarbageCollection.TrackGCState"] = "true";
    settings["Fluid.GarbageCollection.WriteDataAtRoot"] = "true";
    return {
        getRawConfig: (name: string): ConfigTypes => settings[name],
    };
});

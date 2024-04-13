import { promises as fs } from "fs";
import { z } from "zod";

const TrackingIzinSchema = z.array(
    z.object({
        tanggal_pengajuan: z.string(),
        awal_izin: z.string(),
        akhir_izin: z.string(),
        tipe: z.string(),
        status: z.string(),
    }),
);

type TrackingIzin = z.infer<typeof TrackingIzinSchema>;

export async function allTrackingIzin(): Promise<TrackingIzin> {
    const file = await fs.readFile(
        process.cwd() + "/dummy-data/tracking-izin-karyawan.json",
        "utf8",
    );
    const trackingIzin = JSON.parse(file);
    TrackingIzinSchema.parse(trackingIzin.data);
    return trackingIzin.data;
}

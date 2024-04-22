import { z } from "zod";
import { promises as fs } from "fs";

const PersetujuanIzinSchema = z.array(
    z.object({
        nama_karyawan: z.string(),
        departemen: z.string(),
        jabatan: z.string(),
        tipe_izin: z.string(),
        tanggal_pengajuan: z.string(),
        tanggal_awal: z.string(),
        tanggal_akhir: z.string(),
        alasan: z.string().nullable(),
        lampiran: z.string().nullable(),
    }),
);

type PersetujuanIzin = z.infer<typeof PersetujuanIzinSchema>;

export async function PersetujuanIzinData(): Promise<PersetujuanIzin> {
    const file = await fs.readFile(
        process.cwd() + "/dummy-data/persetujuan-izin.json",
        "utf8",
    );
    const persetujuan = JSON.parse(file);
    PersetujuanIzinSchema.parse(persetujuan.data);
    return persetujuan.data;
}

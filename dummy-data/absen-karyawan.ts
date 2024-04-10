import { promises as fs } from "fs";
import { z } from "zod";

const AbsenKaryawanSchema = z.array(
    z.object({
        tanggal: z.string(),
        come_time: z.string(),
        leave_time: z.string(),
        jam_masuk: z.string(),
        jam_keluar: z.string(),
        status: z.string(),
    }),
);

type AbsenKaryawan = z.infer<typeof AbsenKaryawanSchema>;

export async function allAbsenKaryawan(): Promise<AbsenKaryawan> {
    const file = await fs.readFile(
        process.cwd() + "/dummy-data/absen-karyawan.json",
        "utf8",
    );
    const absenKaryawan = JSON.parse(file);
    AbsenKaryawanSchema.parse(absenKaryawan.data);
    return absenKaryawan.data;
}

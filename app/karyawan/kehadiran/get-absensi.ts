import { BASE_SERVER } from "@/const";
import { z } from "zod";

const api_routes = `${BASE_SERVER}/karyawan/kehadiran/absensi`

const AbsensiSchema = z.object({
    data: z.array(
        z.object({
            jam_masuk: z.string(),
            jam_pulang: z.string(),
            tanggal: z.string(),
            tipe_absen: z.string()
        })
    )
})

type Absensi = z.infer<typeof AbsensiSchema>

export async function getAbsensi(userId: number): Promise<Absensi> {
    const path = `${api_routes}/${userId}`
    const resp = await fetch(path)

    if (!resp.ok) {
        throw new Error("can't fetch data")
    }

    const result = await resp.json()
    AbsensiSchema.parse(result)
    return result
}
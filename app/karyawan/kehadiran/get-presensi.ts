import { BASE_SERVER } from "@/const"
import { z } from "zod"

const api_routes = {
    presensi: `${BASE_SERVER}/karyawan/kehadiran/presensi`
}

const PresensiSchema = z.object({
    data: z.array(
        z.object({
            tanggal: z.string(),
            jam_masuk: z.string(),
            jam_pulang: z.string()
        })
    )
})

type Presensi = z.infer<typeof PresensiSchema>

export async function getPresensi(userId: number): Promise<Presensi> {
    const path = `${api_routes.presensi}/${userId}`
    const resp = await fetch(path)

    if(!resp.ok) {
        throw new Error("error fetching presensi data")
    }

    const result = await resp.json()
    PresensiSchema.parse(result)
    return result
}
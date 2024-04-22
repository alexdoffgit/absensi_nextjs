import Filter from "@/components/icons/filter";
import { PersetujuanIzinData } from "@/dummy-data/persetujuan-izin-hr";

export default function PersetujuanIzin() {
  return (
    <div className="grid lg:grid-cols-10 grid-cols-7 h-full">
      <div className="col-start-2 lg:col-end-10 col-end-7">
        <h1 className="text-3xl my-4 mt-8">Persetujuan Izin</h1>
        <div className="flex gap-3">
          <input type="search" className="border rounded p-2" />
          <button
            type="button"
            className="p-1 px-2 bg-blue-600 rounded text-white">
            Minggu Ini
          </button>
          <button
            type="button"
            className="p-1 px-2 bg-blue-600 rounded text-white">
            Bulan Ini
          </button>
          <button
            type="button"
            className="p-1 px-2 bg-blue-600 rounded text-white">
            <span className="text-white text-center">Filter</span>
            <Filter className="w-4 inline-block text-white ml-1 text-center" />
          </button>
        </div>
        <div className="mt-2">
          <DataTable />
        </div>
      </div>
    </div>
  );
}

async function DataTable() {
  const data = await PersetujuanIzinData();

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>
            <th className="border p-4 py-2">Nama Karyawan</th>
            <th className="border p-4 py-2">Departemen</th>
            <th className="border p-4 py-2">Jabatan</th>
            <th className="border p-4 py-2">Tipe Izin</th>
            <th className="border p-4 py-2">Tanggal Pengajuan Izin</th>
            <th className="border p-4 py-2">Tanggal Awal Izin</th>
            <th className="border p-4 py-2">Tanggal Akhir Izin</th>
            <th className="border p-4 py-2">Alasan Izin</th>
            <th className="border p-4 py-2">Lampiran</th>
            <th className="border p-4 py-2">Persetujuan</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => {
            if (i % 2 !== 0) {
              return (
                <tr
                  key={`${d.nama_karyawan}__${d.departemen}__${d.tanggal_pengajuan}`}
                  className="bg-slate-300">
                  <td className="p-2 text-center">{d.nama_karyawan}</td>
                  <td className="p-2 text-center">{d.departemen}</td>
                  <td className="p-2 text-center">{d.jabatan}</td>
                  <td className="p-2 text-center">{d.tipe_izin}</td>
                  <td className="p-2 text-center">{d.tanggal_pengajuan}</td>
                  <td className="p-2 text-center">{d.tanggal_awal}</td>
                  <td className="p-2 text-center">{d.tanggal_akhir}</td>
                  <td className="p-2 text-center">{d.alasan}</td>
                  <td className="p-2 text-center">{d.lampiran}</td>
                  <td className="text-center">
                    <button className="p-1 bg-green-500 rounded text-xs">
                      Accept
                    </button>
                    <span className="mx-1">/</span>
                    <button className="p-1 bg-red-500 rounded text-white text-xs">
                      Reject
                    </button>
                  </td>
                </tr>
              );
            }

            return (
              <tr
                key={`${d.nama_karyawan}__${d.departemen}__${d.tanggal_pengajuan}`}>
                <td className="p-2 text-center">{d.nama_karyawan}</td>
                <td className="p-2 text-center">{d.departemen}</td>
                <td className="p-2 text-center">{d.jabatan}</td>
                <td className="p-2 text-center">{d.tipe_izin}</td>
                <td className="p-2 text-center">{d.tanggal_pengajuan}</td>
                <td className="p-2 text-center">{d.tanggal_awal}</td>
                <td className="p-2 text-center">{d.tanggal_akhir}</td>
                <td className="p-2 text-center">{d.alasan}</td>
                <td className="p-2 text-center">{d.lampiran}</td>
                <td className="text-center">
                  <button className="p-1 bg-green-500 rounded text-xs">
                    Accept
                  </button>
                  <span className="mx-1">/</span>
                  <button className="p-1 bg-red-500 rounded text-white text-xs">
                    Reject
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

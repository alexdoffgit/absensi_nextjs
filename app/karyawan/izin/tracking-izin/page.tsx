import Filter from "@/components/icons/filter";
import Download from "@/components/icons/download";
import { allTrackingIzin } from "@/dummy-data/tracking-izin-karyawan";

export default function TrackingIzin() {
  return (
    <div className="grid lg:grid-cols-10 grid-cols-7">
      <div className="col-start-2 lg:col-end-10 col-end-7">
        <h1 className="text-3xl mt-6 mb-10">Tracking Izin</h1>
        <CardJatahCuti />
        <FilterButtons />
        <DataTable />
      </div>
    </div>
  );
}

function CardJatahCuti() {
  return (
    <div className="bg-slate-400 rounded inline-block">
      <p className="text-2xl text-center mt-4 mb-2">11</p>
      <p className="text-sm mb-4 mx-2">Jatah Cuti 2024</p>
    </div>
  );
}

function FilterButtons() {
  return (
    <div className="flex mt-8 gap-2">
      <button className="p-2  bg-blue-600 rounded text-white">
        Minggu Ini
      </button>
      <button className="p-2 bg-blue-600 rounded text-white">Bulan Ini</button>
      <button className="p-2 bg-blue-600 rounded">
        <Filter className="text-slate-400 inline-block w-6" />
        <span className="text-white">Filter</span>
      </button>
      <button className="p-2 bg-blue-600 rounded">
        <Download className="text-slate-400 inline-block w-6" />
        <span className="text-white">Download Izin</span>
      </button>
    </div>
  );
}

async function DataTable() {
  const data = await allTrackingIzin();

  const tdStyle = `p-2 text-center`;
  const tdOddStyle = `p-2 text-center bg-slate-200`;

  return (
    <div className="overflow-x-auto mt-2">
      <table className="w-full">
        <thead>
          <tr>
            <th className="bg-slate-950 text-white p-2">Tanggal Pengajuan</th>
            <th className="bg-slate-950 text-white p-2">Tanggal Awal Izin</th>
            <th className="bg-slate-950 text-white p-2">Tanggal Akhir Izin</th>
            <th className="bg-slate-950 text-white p-2">Tipe Izin</th>
            <th className="bg-slate-950 text-white p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => {
            if (i % 2 !== 0) {
              return (
                <tr
                  key={`${d.tanggal_pengajuan}__${d.awal_izin}__${d.akhir_izin}`}>
                  <td className={tdOddStyle}>{d.tanggal_pengajuan}</td>
                  <td className={tdOddStyle}>{d.awal_izin}</td>
                  <td className={tdOddStyle}>{d.akhir_izin}</td>
                  <td className={tdOddStyle}>{d.tipe}</td>
                  <td className={tdOddStyle}>{d.status}</td>
                </tr>
              );
            } else {
              return (
                <tr
                  key={`${d.tanggal_pengajuan}__${d.awal_izin}__${d.akhir_izin}`}>
                  <td className={tdStyle}>{d.tanggal_pengajuan}</td>
                  <td className={tdStyle}>{d.awal_izin}</td>
                  <td className={tdStyle}>{d.akhir_izin}</td>
                  <td className={tdStyle}>{d.tipe}</td>
                  <td className={tdStyle}>{d.status}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}

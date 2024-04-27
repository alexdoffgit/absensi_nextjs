import { allAbsenKaryawan } from "@/dummy-data/absen-karyawan";
import Filter from "@/components/icons/filter";
import Download from "@/components/icons/download";
import { getPresensi } from "./get-presensi";

export default async function AbsensiKaryawan() {
  return (
    <div className="grid grid-cols-7 lg:grid-cols-10 h-full">
      <div className="col-start-2 col-end-7 lg:col-end-10">
        <DataTablePresensi />
      </div>
    </div>
  );
}

async function DataTablePresensi() {
  const presensi = await getPresensi(722);

  const thStyle = `p-2 text-white bg-slate-900`;
  const tdStyle = `text-center p-2`;
  const tdOddStyle = `${tdStyle} bg-slate-200`;

  return (
    <div>
      <h1 className="text-3xl mb-14 mt-6">Absen Karyawan</h1>
      <div className="flex flex-col">
        <FilterControl />
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className={thStyle}>Tanggal</th>
                <th className={thStyle}>Come Time</th>
                <th className={thStyle}>Leave Time</th>
                <th className={thStyle}>Jam Masuk</th>
                <th className={thStyle}>Jam Keluar</th>
              </tr>
            </thead>
            <tbody>
              {presensi.data.map((d, i) => {
                if (i % 2 != 0) {
                  return (
                    <tr key={`${d.tanggal}__${d.jam_masuk}__${d.jam_pulang}`}>
                      <td className={tdOddStyle}>{d.tanggal}</td>
                      <td className={tdOddStyle}>???</td>
                      <td className={tdOddStyle}>???</td>
                      <td className={tdOddStyle}>{d.jam_masuk}</td>
                      <td className={tdOddStyle}>{d.jam_pulang}</td>
                    </tr>
                  );
                } else {
                  return (
                    <tr key={`${d.tanggal}__${d.jam_masuk}__${d.jam_pulang}`}>
                      <td className={tdOddStyle}>{d.tanggal}</td>
                      <td className={tdOddStyle}>???</td>
                      <td className={tdOddStyle}>???</td>
                      <td className={tdOddStyle}>{d.jam_masuk}</td>
                      <td className={tdOddStyle}>{d.jam_pulang}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function FilterControl() {
  return (
    <div className="flex gap-2 my-2">
      <button className="p-2 bg-blue-600 text-white rounded">Minggu ini</button>
      <button className="p-2 bg-blue-600 text-white rounded">Bulan ini</button>
      <button className="p-2 bg-blue-600 text-white rounded flex gap-1">
        <Filter className="w-4" />
        Filter
      </button>
      <button className="p-2 bg-blue-600 text-white rounded flex gap-1 items-center">
        <Download />
        Download Absen
      </button>
    </div>
  );
}

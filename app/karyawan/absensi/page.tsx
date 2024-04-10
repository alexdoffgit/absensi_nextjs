import { allAbsenKaryawan } from "@/dummy-data/absen-karyawan";



async function DataTable() {
  const data = await allAbsenKaryawan()

  const thStyle = `p-2 text-white bg-slate-900`
  const tdStyle = `text-center p-2`
  const tdOddStyle = `${tdStyle} bg-slate-200`

  const FilterControl = () => (
    <div className="flex gap-2 my-2">
      <button className="p-2 bg-blue-600 text-white rounded">Minggu ini</button>
      <button className="p-2 bg-blue-600 text-white rounded">Bulan ini</button>
    </div>
  )

  return (
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
              <th className={thStyle}>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((d, i) => {
                if(i % 2 != 0) {
                  return (
                    <tr key={`${d.tanggal}__${d.come_time}__${d.leave_time}`}>
                      <td className={tdOddStyle}>{d.tanggal}</td>
                      <td className={tdOddStyle}>{d.come_time}</td>
                      <td className={tdOddStyle}>{d.leave_time}</td>
                      <td className={tdOddStyle}>{d.jam_masuk}</td>
                      <td className={tdOddStyle}>{d.jam_keluar}</td>
                      <td className={tdOddStyle}>{d.status}</td>
                    </tr>
                  )
                } else {
                  return (
                    <tr key={`${d.tanggal}__${d.come_time}__${d.leave_time}`}>
                      <td className={tdStyle}>{d.tanggal}</td>
                      <td className={tdStyle}>{d.come_time}</td>
                      <td className={tdStyle}>{d.leave_time}</td>
                      <td className={tdStyle}>{d.jam_masuk}</td>
                      <td className={tdStyle}>{d.jam_keluar}</td>
                      <td className={tdStyle}>{d.status}</td>
                    </tr>
                  )
                }
              })
              .slice(0, 10)
            }
          </tbody>
        </table>
      </div>
    </div>
  )  
}

export default async function AbsensiKaryawan() {
  return (
    <div className="grid grid-cols-7 lg:grid-cols-10 h-full">
      <div className="col-start-2 col-end-7 lg:col-end-10">
        <DataTable />
      </div>
    </div>
  )
}
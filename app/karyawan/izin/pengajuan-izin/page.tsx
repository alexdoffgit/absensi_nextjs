import { FileInput } from "./file-input";

export default function PengajuanIzin() {
  return (
    <div className="grid lg:grid-cols-10 grid-cols-7">
      <div className="col-start-2 col-span-5">
        <h1 className="text-3xl mt-2 mb-10">Pengajuan Izin</h1>
        <div>
          <label className="block">Tanggal Pengajuan</label>
          <input
            type="text"
            className="p-2 border rounded"
            value={new Date().toDateString()}
            disabled
          />
        </div>
        <div className="flex justify-between mt-4">
          <span>
            <label htmlFor="mulai-izin" className="block">
              Tanggal Mulai Izin
            </label>
            <input
              type="date"
              name="mulai izin"
              id="mulai-izin"
              className="p-2 border rounded"
            />
          </span>
          <span>
            <label htmlFor="akhir-izin" className="block">
              Tanggal Akhir Izin
            </label>
            <input
              type="date"
              name="akhir izin"
              id="akhir-izin"
              className="p-2 border rounded"
            />
          </span>
        </div>
        <div className="mt-4">
          <label htmlFor="nama-atasan" className="block">
            Nama Atasan
          </label>
          <select name="nama atasan" id="nama-atasan" className="p-2">
            <option value="1">Sukiman</option>
            <option value="2">Sukijan</option>
          </select>
        </div>
        <div className="mt-4">
          <label htmlFor="cuti" className="block">
            Tipe Cuti
          </label>
          <select name="cuti" id="cuti" className="p-2">
            <option value="1">Cuti</option>
            <option value="2">Izin</option>
          </select>
        </div>
        <div className="mt-4">
          <FileInput />
        </div>
        <div className="flex flex-row-reverse">
          <button
            type="button"
            className="p-2 bg-blue-600 rounded text-white mt-4">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

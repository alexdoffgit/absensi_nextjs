import Filter from "@/components/icons/filter";

function DataTable() {}

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
      </div>
    </div>
  );
}

function Sort({ sortBy, setSortBy }) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
      <label htmlFor="sort" className="font-semibold">
        Urut berdasarkan :
      </label>
      <select
        id="sort"
        className="w-full border-0 border-y border-transparent border-b-black bg-transparent py-2.5 sm:w-36"
        value={sortBy}
        onChange={(event) => setSortBy(event.target.value)}
      >
        <option value="nama">Nama</option>
        <option value="air">Air</option>
        <option value="energi">Energi</option>
        <option value="protein">Protein</option>
        <option value="lemak">Lemak</option>
        <option value="karbohidrat">Karbohidrat</option>
        <option value="serat">Serat</option>
        <option value="kalsium">Kalsium</option>
        <option value="fosfor">Fosfor</option>
        <option value="besi">Besi</option>
        <option value="natrium">Natrium</option>
        <option value="kalium">Kalium</option>
        <option value="vitamin_c">Vitamin&nbsp;C</option>
      </select>
    </div>
  );
}

export default function SortOrder({ sortBy, setSortBy }) {
  return <Sort sortBy={sortBy} setSortBy={setSortBy} />;
}

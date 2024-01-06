function SelectForm({ children, id, label, selectBy, setSelectBy }) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
      <label htmlFor={id} className="font-semibold">
        {label}
      </label>
      <select
        id={id}
        className="w-full border-0 border-y border-transparent border-b-black bg-transparent py-2.5 sm:w-36"
        value={selectBy}
        onChange={(event) => setSelectBy(event.target.value)}
      >
        {children}
      </select>
    </div>
  );
}

export function Sort({ sortBy, setSortBy }) {
  return (
    <SelectForm
      id="sort"
      label="Urut berdasarkan :"
      selectBy={sortBy}
      setSelectBy={setSortBy}
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
    </SelectForm>
  );
}

export function Order({ orderBy, sortBy, setOrderBy }) {
  return (
    <SelectForm
      id="order"
      label="Dari :"
      selectBy={orderBy}
      setSelectBy={setOrderBy}
    >
      <option value="lowest">
        {sortBy === "nama" ? "A ke Z" : "Terendah"}
      </option>
      <option value="highest">
        {sortBy === "nama" ? "Z ke A" : "Tertinggi"}
      </option>
    </SelectForm>
  );
}

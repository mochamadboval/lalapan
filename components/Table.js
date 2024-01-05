import { useState } from "react";

function Th({ children, unit }) {
  return (
    <th className="sticky top-0 border-b border-r border-t border-neutral-800 bg-neutral-950 p-2.5 font-semibold text-white first:border-l">
      {children}
      <br />
      <span className="font-normal">{unit}</span>
    </th>
  );
}

function Td({ children, style }) {
  return (
    <td
      className={`${style} border-b border-r border-neutral-200 p-2.5 first:border-l`}
    >
      {children}
    </td>
  );
}

export default function Table({ lalapan }) {
  const [highlight, setHighlight] = useState([]);

  const highlightRow = (id) => {
    if (highlight.includes(id)) {
      setHighlight(highlight.filter((row) => row !== id));
    } else {
      setHighlight([...highlight, id]);
    }
  };

  return (
    <>
      <div className="max-h-[90svh] overflow-auto">
        <table className="relative w-full border-separate border-spacing-0 text-center">
          <thead>
            <tr>
              <Th>No</Th>
              <Th>Nama</Th>
              <Th unit="(g)">Air</Th>
              <Th unit="(kal)">Energi</Th>
              <Th unit="(g)">Protein</Th>
              <Th unit="(g)">Lemak</Th>
              <Th unit="(g)">Karbohidrat</Th>
              <Th unit="(g)">Serat</Th>
              <Th unit="(mg)">Kalsium</Th>
              <Th unit="(mg)">Fosfor</Th>
              <Th unit="(mg)">Besi</Th>
              <Th unit="(mg)">Natrium</Th>
              <Th unit="(mg)">Kalium</Th>
              <Th unit="(mg)">Vitamin&nbsp;C</Th>
              <Th unit="(%)">BDD</Th>
            </tr>
          </thead>
          <tbody>
            {lalapan.map((info, index) => (
              <tr
                key={info.id}
                className={`
                ${index % 2 === 0 ? "bg-neutral-50" : "bg-neutral-100"}
                ${highlight.includes(info.id) && "!bg-green-200"}
              `}
                onClick={() => highlightRow(info.id)}
              >
                <Td>{index + 1}</Td>
                <Td style="text-left whitespace-nowrap">{info.nama}</Td>
                <Td>{info.air}</Td>
                <Td>{info.energi}</Td>
                <Td>{info.protein}</Td>
                <Td>{info.lemak}</Td>
                <Td>{info.karbohidrat}</Td>
                <Td>{info.serat}</Td>
                <Td>{info.kalsium}</Td>
                <Td>{info.fosfor}</Td>
                <Td>{info.besi}</Td>
                <Td>{info.natrium}</Td>
                <Td>{info.kalium}</Td>
                <Td>{info.vitamin_c}</Td>
                <Td>{info.bdd}</Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 font-semibold">Keterangan :</p>
      <ul className="list-inside list-disc">
        <li>Komposisi gizi per 100 gram</li>
        <li>BDD (Berat Dapat Dimakan)</li>
        <li>Klik baris untuk disorot</li>
      </ul>
    </>
  );
}

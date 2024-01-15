import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { highlightActions } from "@/store";

function Th({ children, style, unit }) {
  return (
    <th
      className={`${style} sticky top-0 border-b border-r border-t border-neutral-800 bg-neutral-950 p-2.5 font-semibold text-neutral-50 first:border-l`}
    >
      {children}
      <br />
      <span className="text-sm font-normal">{unit}</span>
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

export default function Table({ sorted, table }) {
  const dispatch = useDispatch();
  const highlight = useSelector((state) => state.highlight.highlight);
  const sortBy = useSelector((state) => state.sortOrder.sortBy);

  const highlightRow = (id) => {
    if (highlight.includes(id)) {
      dispatch(
        highlightActions.setHighlight(highlight.filter((row) => row !== id)),
      );
    } else {
      dispatch(highlightActions.setHighlight([...highlight, id]));
    }
  };

  return (
    <>
      <div className="mt-4 max-h-[90svh] overflow-auto">
        <table className="relative w-full border-separate border-spacing-0 text-center">
          <thead>
            <tr>
              {table.map((info, index) => (
                <Th
                  key={info.kolom}
                  unit={info.unit}
                  style={`
                    ${info.kolom === "Vitamin C" && "whitespace-nowrap"}
                    ${index === 1 && sortBy !== "nama" && "!border-r-green-300"}
                    ${
                      index === 2 &&
                      sortBy !== "nama" &&
                      "!border-r-green-300 !border-t-green-300"
                    }
                  `}
                >
                  {info.kolom}
                </Th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((info, index) => (
              <tr
                key={info[0][1]}
                className={`
                  ${index % 2 === 0 ? "bg-white" : "bg-neutral-100"}
                  ${highlight.includes(info[0][1]) && "!bg-green-200"}
                `}
                onClick={() => highlightRow(info[0][1])}
              >
                <Td>{index + 1}</Td>
                <Td
                  style={`
                    ${sortBy !== "nama" && "!border-r-green-300"}
                    text-left whitespace-nowrap
                  `}
                >
                  <h2>
                    <Link
                      href={`/${info[0][1]}`}
                      prefetch={false}
                      className="hover:underline"
                      onClick={(event) => event.stopPropagation()}
                    >
                      {info[1][1]}
                    </Link>
                  </h2>
                </Td>
                <Td
                  style={`
                    ${sortBy !== "nama" && "!border-r-green-300"}
                    ${
                      sortBy !== "nama" &&
                      index + 1 === sorted.length &&
                      "!border-b-green-300"
                    }
                  `}
                >
                  {info[2][1]}
                </Td>
                <Td>{info[3][1]}</Td>
                <Td>{info[4][1]}</Td>
                <Td>{info[5][1]}</Td>
                <Td>{info[6][1]}</Td>
                <Td>{info[7][1]}</Td>
                <Td>{info[8][1]}</Td>
                <Td>{info[9][1]}</Td>
                <Td>{info[10][1]}</Td>
                <Td>{info[11][1]}</Td>
                <Td>{info[12][1]}</Td>
                <Td>{info[13][1]}</Td>
                <Td>{info[14][1]}</Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 font-semibold">Keterangan :</p>
      <ul className="list-inside list-disc">
        <li>
          Komposisi gizi per <strong className="font-semibold">100 gram</strong>
        </li>
        <li>
          <strong className="font-semibold">BDD</strong> (Berat Dapat Dimakan)
        </li>
        <li>Klik baris untuk disorot</li>
      </ul>
    </>
  );
}

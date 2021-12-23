import { FC, isValidElement } from "react";


interface TableProps {
  title: string;
  headers: Array<string>;
  data: Array<any>;
}


const Table: FC<TableProps> = ({ title, headers, data }) => {

  return (
    <table>
      <caption>{title}</caption>
      <thead>
        <tr>
          {headers.map((h, index) => <th key={index}>{h}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((R, index) =>
          <tr key={index}>
            {isValidElement(R) ? {R} : headers.map((h, index) => <td key={index}>{R[h]}</td>)}
          </tr>
        )}
      </tbody>
    </table>
  );

}


export default Table;

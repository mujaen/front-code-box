import { Table, TableHeader, TableBody, TableHead, TableRow, TableData } from './style'

function SortTable({}): JSX.Element {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>1</TableHead>
          <TableHead>1</TableHead>
          <TableHead>1</TableHead>
          <TableHead>1</TableHead>
          <TableHead>1</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableData>2</TableData>
        <TableData>2</TableData>
        <TableData>2</TableData>
        <TableData>2</TableData>
        <TableData>2</TableData>
      </TableBody>
    </Table>
  )
}

export default SortTable

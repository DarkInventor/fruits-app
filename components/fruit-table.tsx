import { Fruit } from '@/types'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

interface FruitTableProps {
  fruits: Fruit[]
  addToJar: (fruit: Fruit) => void
}

export default function FruitTable({ fruits, addToJar }: FruitTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Family</TableHead>
          <TableHead>Order</TableHead>
          <TableHead>Genus</TableHead>
          <TableHead>Calories</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {fruits.map((fruit, index) => (
          <TableRow key={index}>
            <TableCell>{fruit.name}</TableCell>
            <TableCell>{fruit.family}</TableCell>
            <TableCell>{fruit.order}</TableCell>
            <TableCell>{fruit.genus}</TableCell>
            <TableCell>{fruit.nutritions.calories}</TableCell>
            <TableCell>
              <Button onClick={() => addToJar(fruit)}>Add</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
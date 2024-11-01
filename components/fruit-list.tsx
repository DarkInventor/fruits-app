import { Fruit, GroupBy } from '@/types'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

interface FruitListProps {
  fruits: Fruit[]
  groupBy: GroupBy
  addToJar: (fruit: Fruit) => void
  addGroupToJar: (group: string) => void
}

export default function FruitList({ fruits, groupBy, addToJar, addGroupToJar }: FruitListProps) {
  const [openGroups, setOpenGroups] = useState<string[]>([])

  const toggleGroup = (group: string) => {
    setOpenGroups(prev =>
      prev.includes(group) ? prev.filter(g => g !== group) : [...prev, group]
    )
  }

  if (groupBy === 'None') {
    return (
      <ul className="space-y-2">
        {fruits.map((fruit, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{fruit.name} ({fruit.nutritions.calories} calories)</span>
            <Button onClick={() => addToJar(fruit)}>Add</Button>
          </li>
        ))}
      </ul>
    )
  }

  const groupedFruits = fruits.reduce((acc, fruit) => {
    const key = fruit[groupBy.toLowerCase() as keyof Fruit] as string
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(fruit)
    return acc
  }, {} as Record<string, Fruit[]>)

  return (
    <div className="space-y-2">
      {Object.entries(groupedFruits).map(([group, groupFruits]) => (
        <Collapsible key={group} open={openGroups.includes(group)} onOpenChange={() => toggleGroup(group)}>
          <CollapsibleTrigger className="flex justify-between items-center w-full">
            <span>{group}</span>
            {openGroups.includes(group) ? <ChevronDown /> : <ChevronRight />}
          </CollapsibleTrigger>
          <CollapsibleContent>
            <ul className="space-y-2 ml-4 mt-2">
              {groupFruits.map((fruit, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{fruit.name} ({fruit.nutritions.calories} calories)</span>
                  <Button onClick={() => addToJar(fruit)}>Add</Button>
                </li>
              ))}
            </ul>
            <Button onClick={() => addGroupToJar(group)} className="mt-2">Add All</Button>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  )
}
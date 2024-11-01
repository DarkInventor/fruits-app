import { Fruit } from '@/types'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

interface JarProps {
  fruits: Fruit[]
}

export default function Jar({ fruits }: JarProps) {
  const [showChart, setShowChart] = useState(false)

  const totalCalories = fruits.reduce((sum, fruit) => sum + fruit.nutritions.calories, 0)

  const chartData = fruits.reduce((acc, fruit) => {
    const existingFruit = acc.find(item => item.name === fruit.name)
    if (existingFruit) {
      existingFruit.value += fruit.nutritions.calories
    } else {
      acc.push({ name: fruit.name, value: fruit.nutritions.calories })
    }
    return acc
  }, [] as { name: string; value: number }[])

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#A4DE6C', '#D0ED57']

  return (
    <div className="border p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Fruit Jar</h2>
      <ul className="mb-4">
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit.name} ({fruit.nutritions.calories} calories)</li>
        ))}
      </ul>
      <p className="font-bold">Total Calories: {totalCalories}</p>
      <Button onClick={() => setShowChart(!showChart)} className="mt-4">
        {showChart ? 'Hide Chart' : 'Show Chart'}
      </Button>
      {showChart && (
        <div className="h-[300px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  )
}
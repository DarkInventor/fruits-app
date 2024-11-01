'use client'

import { useState, useEffect } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { Fruit, GroupBy } from '@/types'
import FruitList from './fruit-list'
import FruitTable from './fruit-table'
import Jar from './jar'

export default function FruitApp() {
  const [fruits, setFruits] = useState<Fruit[]>([])
  const [groupBy, setGroupBy] = useState<GroupBy>('None')
  const [jarFruits, setJarFruits] = useState<Fruit[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchFruits = async () => {
      try {
        const response = await fetch('/api/fruits') // Updated API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch fruits')
        }
        const data = await response.json()
        setFruits(data)
      } 
  
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      catch (err) {
        setError('Failed to load fruits. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchFruits()
  }, [])

  const addToJar = (fruit: Fruit) => {
    setJarFruits([...jarFruits, fruit])
  }

  const addGroupToJar = (group: string) => {
    const fruitsToAdd = fruits.filter(fruit => fruit[groupBy.toLowerCase() as keyof Fruit] === group)
    setJarFruits([...jarFruits, ...fruitsToAdd])
  }

  if (isLoading) {
    return <div className="text-center">Loading fruits...</div>
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <div className="mb-4">
          <Select onValueChange={(value: GroupBy) => setGroupBy(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Group by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="None">None</SelectItem>
              <SelectItem value="Family">Family</SelectItem>
              <SelectItem value="Order">Order</SelectItem>
              <SelectItem value="Genus">Genus</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Tabs defaultValue="list">
          <TabsList>
            <TabsTrigger value="list">List</TabsTrigger>
            <TabsTrigger value="table">Table</TabsTrigger>
          </TabsList>
          <TabsContent value="list">
            <FruitList fruits={fruits} groupBy={groupBy} addToJar={addToJar} addGroupToJar={addGroupToJar} />
          </TabsContent>
          <TabsContent value="table">
            <FruitTable fruits={fruits} addToJar={addToJar} />
          </TabsContent>
        </Tabs>
      </div>
      <div>
        <Jar fruits={jarFruits} />
      </div>
    </div>
  )
}
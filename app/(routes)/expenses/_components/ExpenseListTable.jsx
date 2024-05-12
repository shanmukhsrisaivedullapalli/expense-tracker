import { db } from '../../../../utils/dbConfig'
import { Expenses } from '../../../../utils/schema'
import { eq } from 'drizzle-orm'
import { Trash } from 'lucide-react'
import React from 'react'
import { toast } from 'sonner'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table"
import { Icons } from '../../../../components/Icons'

function ExpenseListTable({expensesList,refreshData}) {

  const deleteExpense=async(expense)=>{
    const result=await db.delete(Expenses)
    .where(eq(Expenses.id,expense.id))
    .returning();

    if(result)
    {
      toast('Expense Deleted!');
      refreshData()
    }
  }
  return (
    <div className='pt-9'> 
   <div className='grid grid-cols-4 p-6 mt-3 text-muted-foreground border-b'>
            <h2 className=' font-medium text-sm'>Name</h2>
            <h2 className=' font-medium text-sm'>Amount</h2>
            <h2 className=' font-medium text-sm'>Date</h2>
            <h2 className=' font-medium text-sm'>Action</h2>
        </div>
        {expensesList.map((expenses,index)=>(
             <div className='grid grid-cols-4 border-b p-6 hover:bg-accent text-base font-normal'>
             <h2>{expenses.name}</h2>
             <h2>{expenses.amount}</h2>
             <h2>{expenses.createdAt}</h2>
             <h2>
                 <Icons.delete className="size-6 text-red-500 cursor-pointer" onClick={()=>deleteExpense(expenses)} />

             </h2>
         </div>
        ))}
    </div>
  )
}

export default ExpenseListTable
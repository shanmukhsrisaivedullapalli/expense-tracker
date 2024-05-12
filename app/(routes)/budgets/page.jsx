import React from 'react'
import BudgetList from './_components/BudgetList'

function Budget() {
  return (
    <div className="mt-12">
      <div className="space-y-5">
        <h1 className="text-3xl font-medium">My Budgets</h1>
        <hr />
      </div>
<div className="pt-10">
      <BudgetList/>
</div>
    </div>
  )
}

export default Budget